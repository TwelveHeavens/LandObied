"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "Как это устроено" },
  { href: "#for-whom", label: "Для кого" },
  { href: "#benefits", label: "Что ты получишь" },
  { href: "#faq", label: "Вопросы" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Логотип */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="size-2 rounded-full bg-peach transition-transform group-hover:scale-125" />
          <span className="size-2 rounded-full bg-lavender transition-transform group-hover:scale-125" />
          <span className="font-display text-sm font-bold tracking-wide text-paper">
            Объединение
          </span>
        </a>

        {/* Десктоп-навигация */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-fog transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Десктоп-кнопка */}
        <a
          href="#apply"
          className="hidden rounded-full bg-peach px-5 py-2 font-subhead text-sm font-semibold text-ink transition-colors hover:bg-paper md:inline-flex"
        >
          Оставить заявку
        </a>

        {/* Мобильная кнопка-гамбургер */}
        <button
          onClick={() => setOpen(!open)}
          className="flex size-10 items-center justify-center rounded-lg border border-line bg-ash text-paper md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          {/* Иконка превращается из ≡ в × */}
          <span
            className={`relative block h-0.5 w-5 bg-paper transition-all duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-paper transition-all duration-300 ${
                open ? "translate-y-0 rotate-90" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-paper transition-all duration-300 ${
                open ? "translate-y-0 -rotate-90" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Мобильное меню — выезжает сверху */}
      <div
        className={`overflow-hidden border-t border-line bg-ink transition-all duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-subhead text-base text-paper last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-peach px-6 py-3 text-center font-subhead font-semibold text-ink transition-colors hover:bg-paper"
          >
            Оставить заявку
          </a>
        </nav>
      </div>
    </header>
  );
}