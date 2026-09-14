const SOCIAL_LINKS = [
  { name: "Telegram", href: "https://t.me/obedinenie_ru", icon: "TG" },
  // { name: "VK", href: "https://vk.com/your_group", icon: "VK" },
  { name: "TikTok", href: "https://www.tiktok.com/@obedinenie_?_r=1&_t=ZS-99bDups3RgK", icon: "TT" },
];

export default function Footer() {
  return (
    <footer className="bg-coal border-t border-line py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Логотип и описание */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2.5">
              <span className="size-2 rounded-full bg-peach" />
              <span className="size-2 rounded-full bg-lavender" />
              <span className="font-display text-sm font-bold tracking-wide text-paper">
                Объединение
              </span>
            </div>
            <p className="font-body text-sm text-fog text-center md:text-left">
              Закрытое сообщество подростков, где ты найдёшь единомышленников, будешь учиться у практиков
              и создавать проекты, которыми захочешь гордиться.
            </p>
          </div>

          {/* Соцсети */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-line bg-ash font-subhead text-xs font-semibold text-fog transition-all duration-300 hover:border-peach hover:text-peach hover:-translate-y-0.5"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-12 border-t border-line pt-6 text-center">
          <p className="font-body text-xs text-fog">
            © {new Date().getFullYear()} Объединение. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}