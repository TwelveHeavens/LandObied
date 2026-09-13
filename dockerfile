# syntax=docker/dockerfile:1
FROM node:20-alpine AS base

# ---------------------------------------------------------
# ЭТАП 1: Установка зависимостей
# ---------------------------------------------------------
FROM base AS deps
# КРИТИЧЕСКИ ВАЖНО для Alpine: эта библиотека нужна для работы sharp и swc
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Принудительно включаем стабильную версию pnpm ТОЛЬКО в Docker
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

COPY package.json pnpm-lock.yaml ./

# Создаем .npmrc с правильным синтаксисом массива (без кавычек)
RUN echo "only-built-dependencies[]=sharp" > .npmrc && \
    echo "only-built-dependencies[]=unrs-resolver" >> .npmrc

RUN pnpm install --frozen-lockfile

# ---------------------------------------------------------
# ЭТАП 2: Сборка проекта
# ---------------------------------------------------------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

# ---------------------------------------------------------
# ЭТАП 3: Продакшен-образ
# ---------------------------------------------------------
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Создаем пользователя с правами ниже root для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Настраиваем права для кэша
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Копируем только собранное приложение (standalone mode)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]