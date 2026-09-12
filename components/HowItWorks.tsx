const STEPS = [
  {
    number: "01",
    title: "Оставляешь заявку",
    text: "Заполняешь короткую анкету — рассказываешь о себе и своих интересах. Мы знакомимся и приглашаем тебя.",
    accent: "peach",
  },
  {
    number: "02",
    title: "Находишь своих",
    text: "Попадаешь в окружение таких же заряженных ребят. Объединяетесь по интересам и целям.",
    accent: "lavender",
  },
  {
    number: "03",
    title: "Учишься у ментора",
    text: "Практикующий специалист ведёт тебя в выбранном направлении: делится опытом и актуальными навыками.",
    accent: "peach",
  },
  {
    number: "04",
    title: "Создаёшь проект",
    text: "В команде работаете над реальным проектом — от идеи до результата, под руководством наставника.",
    accent: "lavender",
  },
  {
    number: "05",
    title: "Растёшь дальше",
    text: "Показываешь результат, получаешь обратную связь и открываешь новые возможности.",
    accent: "peach",
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="scroll-mt-24 bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* заголовок секции */}
        <div className="max-w-2xl">
          <span className="font-subhead text-sm uppercase tracking-[0.3em] text-peach">
            Путь участника
          </span>
          <h2 className="mt-4 font-display text-4xl font-black text-paper md:text-5xl">
            Как это устроено
          </h2>
          <p className="mt-4 font-body text-lg text-fog">
            От первой заявки до собственного проекта — понятный маршрут, по которому ты идёшь не один.
          </p>
        </div>

        {/* таймлайн пути */}
        <div className="relative mt-16 md:mt-20">
          {/* соединяющая линия позади узлов */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-line" />

          {STEPS.map((step) => (
            <div key={step.number} className="group relative flex gap-6 pb-12 last:pb-0 md:gap-10">
              {/* узел с номером */}
              <div
                className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border bg-coal font-display text-sm font-bold transition-colors duration-300 ${
                  step.accent === "peach"
                    ? "border-peach/40 text-peach group-hover:bg-peach group-hover:text-ink"
                    : "border-lavender/40 text-lavender group-hover:bg-lavender group-hover:text-ink"
                }`}
              >
                {step.number}
              </div>

              {/* контент шага */}
              <div className="max-w-xl pt-1">
                <h3 className="font-subhead text-xl font-semibold text-paper md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-base text-fog md:text-lg">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}