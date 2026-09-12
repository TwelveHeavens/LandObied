import NetworkBackground from "@/components/NetworkBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      {/* живая сеть связей */}
      <NetworkBackground />

      {/* мягкие источники света по углам — тёплый и холодный */}
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 size-[36rem] rounded-full bg-peach/10 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 size-[36rem] rounded-full bg-lavender/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32">
        {/* марка-надзаголовок */}
        <div className="flex items-center gap-3 animate-fade-up">
          <span className="size-2 rounded-full bg-peach" />
          <span className="size-2 rounded-full bg-lavender" />
          <span className="font-subhead text-xs uppercase tracking-[0.3em] text-fog md:text-sm">
            Закрытое сообщество · Набор открыт
          </span>
        </div>

        {/* заголовок */}
        <h1 className="mt-8 font-display font-black leading-[0.95]">
          <span className="block text-6xl text-paper animate-fade-up md:text-8xl" style={{ animationDelay: "0.12s" }}>
            СОБЕРИ
          </span>
          <span className="block text-6xl text-peach animate-fade-up md:text-8xl" style={{ animationDelay: "0.24s" }}>
            ОКРУЖЕНИЕ!
          </span>
        </h1>

        {/* подзаголовок */}
        <p className="mt-8 max-w-xl font-subhead text-xl text-paper/90 animate-fade-up md:text-2xl" style={{ animationDelay: "0.36s" }}>
          Учись у практиков, находи единомышленников и создавай проекты,
          которыми будешь гордиться.
        </p>

        <p className="mt-4 max-w-lg font-body text-base text-fog animate-fade-up md:text-lg" style={{ animationDelay: "0.44s" }}>
          С нами талантливые подростки объединяются в команды, перенимают опыт
          у наставников и вместе строят будущее.
        </p>

        {/* призывы к действию */}
        <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.56s" }}>
          <a
            href="#apply"
            className="group inline-flex items-center gap-2 rounded-full bg-peach px-8 py-4 font-subhead font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper"
          >
            Оставить заявку
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-line px-8 py-4 font-subhead font-semibold text-paper transition-all duration-300 hover:border-lavender hover:text-lavender"
          >
            Как это устроено
          </a>
        </div>
      </div>

      {/* подсказка скролла */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-fog">↓</div>
    </section>
  );
}