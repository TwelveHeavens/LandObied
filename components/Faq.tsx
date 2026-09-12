"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  { q: "Кто может стать участником?", a: "Подростки 14–19 лет, которым интересно развиваться и создавать своё. Опыт не обязателен — важна мотивация!" },
  { q: "Это бесплатно?", a: "Участие бесплатное, но мы отбираем самых мотивированных ребят!" },
  { q: "Как проходит отбор?", a: "Вы оставляете заявку, мы знакомимся и приглашаем вас в сообщество." },
  { q: "Сколько времени это занимает?", a: "Несколько часов в неделю — легко совмещать с учёбой." },
  { q: "Что нужно, чтобы начать?", a: "Только желание и телефон или компьютер. Остальному научим вместе с менторами." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="scroll-mt-24 bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <span className="font-subhead text-sm uppercase tracking-[0.3em] text-lavender">FAQ</span>
        <h2 className="mt-4 font-display text-4xl font-black text-paper md:text-5xl">Частые вопросы</h2>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="py-4">
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 py-3 text-left"
                  // Увеличиваем область клика для мобильных
                  style={{ minHeight: "48px" }}
                >
                  <span className="font-subhead text-base font-semibold text-paper md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-ash text-peach transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Простая анимация через max-height */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-3 font-body text-base text-fog md:text-lg">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}