import NetworkBackground from "@/components/NetworkBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      {/* живая сеть связей */}
      <NetworkBackground />

      {/* мягкие источники света по углам — тёплый и холодный */}
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 size-144 rounded-full bg-peach/10 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 size-144 rounded-full bg-lavender/10 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 md:px-12 lg:px-7">
        {/* марка-надзаголовок */}
        <div className="flex items-center gap-2 animate-fade-up sm:gap-3">
          <span className="size-1.5 rounded-full bg-peach sm:size-2" />
          <span className="size-1.5 rounded-full bg-lavender sm:size-2" />
          <span className="font-subhead text-[9px] uppercase tracking-[0.2em] text-fog sm:text-[10px] md:text-xs lg:text-sm">
            Закрытое сообщество · Набор открыт
          </span>
        </div>

        {/* заголовок */}
        <h1 className="mt-5 font-display font-black leading-[0.9] wrap-break-word md:mt-8">
          <span className="block text-4xl text-paper animate-fade-up sm:text-5xl md:text-7xl lg:text-8xl" style={{ animationDelay: "0.12s" }}>
            СОБЕРИ
          </span>
          <span className="block text-4xl text-peach animate-fade-up sm:text-5xl md:text-7xl lg:text-8xl" style={{ animationDelay: "0.24s" }}>
            ОКРУЖЕНИЕ!
          </span>
        </h1>

        {/* подзаголовок */}
        <p className="mt-5 max-w-xl font-subhead text-base leading-relaxed text-paper/90 animate-fade-up sm:text-lg md:text-xl lg:text-2xl" style={{ animationDelay: "0.36s" }}>
          Учись у практиков, находи единомышленников и создавай проекты,
          которыми будешь гордиться.
        </p>

        <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-fog animate-fade-up sm:text-base md:text-lg" style={{ animationDelay: "0.44s" }}>
          С нами талантливые подростки объединяются в команды, перенимают опыт
          у наставников и вместе строят будущее.
        </p>

        {/* призывы к действию */}
        <div className="mt-7 flex flex-col gap-3 animate-fade-up sm:flex-row sm:gap-4" style={{ animationDelay: "0.56s" }}>
          <a
            href="#apply"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-peach px-6 py-3 font-subhead font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper sm:px-8 sm:py-4"
          >
            Оставить заявку
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 font-subhead font-semibold text-paper transition-all duration-300 hover:border-lavender hover:text-lavender sm:px-8 sm:py-4"
          >
            Как это устроено
          </a>
        </div>
      </div>

      {/* подсказка скролла */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-fog md:bottom-8">↓</div>
    </section>
  );
}