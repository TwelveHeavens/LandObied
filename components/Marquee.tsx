const ITEMS = [
  "IT", "Дизайн", "Наука", "Медиа",
  "Предпринимательство", "Лидерство", "Творчество", "Дружба",
];

export default function Marquee() {
  // Дубликат списка для бесшовного воспроизведения
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-line bg-coal py-5">
      <div className="flex w-max animate-marquee items-center gap-12">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-subhead text-lg uppercase tracking-[0.2em] text-paper">
              {item}
            </span>
            <span className={`size-2 rounded-full ${i % 2 ? "bg-lavender" : "bg-peach"}`} />
          </span>
        ))}
      </div>
    </div>
  );
}