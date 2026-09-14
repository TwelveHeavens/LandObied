import ApplicationForm from "@/components/ApplicationForm";

export default function ApplySection() {
  return (
    <section id="apply" className="scroll-mt-24 bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <span className="font-subhead text-sm uppercase tracking-[0.3em] text-peach">Заявка</span>
          <h2 className="mt-4 font-display text-4xl font-black text-paper md:text-5xl">Дело за малым</h2>
          <p className="mt-5 font-body text-lg text-fog">
            Оставь заявку — Мы напишем тебе и расскажем, что будет ждать тебя дальше!
          </p>
          <div className="mt-8 flex items-center gap-2">
            <span className="size-2 rounded-full bg-peach" />
            <span className="size-2 rounded-full bg-lavender" />
          </div>
        </div>
        <ApplicationForm />
      </div>
    </section>
  );
}