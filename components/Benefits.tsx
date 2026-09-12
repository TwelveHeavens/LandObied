// Перечисляем допустимые значения — теперь TS знает их наперечёт
type Size = "large" | "small" | "wide";

type Benefit = {
  title: string;
  text: string;
  size: Size;
  accent: "peach" | "lavender";
};

const BENEFITS: Benefit[] = [
  {
    title: "Сильное окружение",
    text: "Единомышленники, которые тянут вверх. Ты оказываешься среди тех, кто стремится, — и растёшь вместе с ними.",
    size: "large",
    accent: "peach",
  },
  {
    title: "Ментор-практик",
    text: "Специалист из индустрии ведёт тебя в выбранном направлении и делится реальным опытом.",
    size: "small",
    accent: "lavender",
  },
  {
    title: "Реальные проекты",
    text: "Работаешь в команде над настоящим делом — от идеи до результата.",
    size: "small",
    accent: "peach",
  },
  {
    title: "Навыки будущего",
    text: "Предпринимательское, лидерское и критическое мышление — то, что пригодится везде.",
    size: "small",
    accent: "lavender",
  },
  {
    title: "Нетворкинг",
    text: "Связи, обмен опытом и сотрудничество с ребятами и наставниками.",
    size: "small",
    accent: "peach",
  },
  {
    title: "Безопасная среда",
    text: "Закрытое сообщество с модерацией: здесь можно пробовать, ошибаться и не бояться осуждения.",
    size: "wide",
    accent: "lavender",
  },
];

// Record<Size, string> = «объект, где каждый ключ из Size ведёт к строке»
const sizeClass: Record<Size, string> = {
  large: "md:col-span-2",
  small: "",
  wide: "md:col-span-3",
};

export default function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-24 bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="font-subhead text-sm uppercase tracking-[0.3em] text-peach">
            Что ты получишь
          </span>
          <h2 className="mt-4 font-display text-4xl font-black text-paper md:text-5xl">
            Не теория, а среда для роста
          </h2>
        </div>

        {/* bento-сетка */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              className={`group rounded-xl border border-line bg-coal p-7 transition-all duration-300 hover:-translate-y-1 ${sizeClass[b.size]} ${
                b.accent === "peach" ? "hover:border-peach/60" : "hover:border-lavender/60"
              }`}
            >
              <span
                className={`inline-block size-2 rounded-full ${
                  b.accent === "peach" ? "bg-peach" : "bg-lavender"
                }`}
              />
              <h3 className="mt-5 font-subhead text-xl font-semibold text-paper">{b.title}</h3>
              <p className="mt-2 font-body text-base text-fog">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}