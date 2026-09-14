const TRAITS = [
  {
    title: "Хочешь расти",
    text: "Тесно в привычных рамках, и ты ищешь, куда приложить силы.",
  },
  {
    title: "Создаёшь, а не только листаешь",
    text: "Интереснее сделать что-то своё, чем бесконечно потреблять контент.",
  },
  {
    title: "Ищешь близких по духу",
    text: "Хочешь оказаться среди людей, которые горят тем же, чем и ты.",
  },
  {
    title: "Готов пробовать",
    text: "Не боишься нового: браться за задачи, задавать вопросы, ошибаться и учиться.",
  },
  {
    title: "Тебе 14–19 лет",
    text: "Сообщество для подростков — и ты в самом центре этого возраста.",
  },
];

export default function ForWhom() {
  return (
    <section id="for-whom" className="scroll-mt-24 bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* левая колонка — заголовок */}
          <div className="md:col-span-2">
            <span className="font-subhead text-sm uppercase tracking-[0.3em] text-lavender">
              Для кого
            </span>
            <h2 className="mt-4 font-display text-4xl font-black text-paper md:text-5xl">
              Тебе к нам, если…
            </h2>
            <p className="mt-4 font-body text-lg text-fog">
              Мы собираем тех, кому интересно двигаться вперёд. Проверь, узнаёшь ли ты себя?
            </p>
          </div>

          {/* правая колонка — список черт */}
          <ul className="divide-y divide-line md:col-span-3">
            {TRAITS.map((trait, i) => (
              <li key={trait.title} className="group flex gap-5 py-6 first:pt-0 last:pb-0">
                <span
                  className={`mt-1.5 size-2.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-150 ${
                    i % 2 ? "bg-lavender" : "bg-peach"
                  }`}
                />
                <div>
                  <h3 className="font-subhead text-lg font-semibold text-paper md:text-xl">
                    {trait.title}
                  </h3>
                  <p className="mt-1 font-body text-base text-fog">{trait.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}