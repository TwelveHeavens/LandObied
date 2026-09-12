"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, type ApplicationInput } from "@/lib/application-schema";
import { submitApplication } from "@/actions/submitApplication";

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const {
    register,
    handleSubmit, // ← важно!
    formState: { errors },
  } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { name: "", contact: "", comment: "" },
  });

  // Эта функция получает УЖЕ ВАЛИДИРОВАННЫЕ данные
  const onFormSubmit = async (data: ApplicationInput) => {
    setStatus("sending");
    const result = await submitApplication(data);
    setStatus(result.ok ? "done" : "error");
  };

  if (status === "done") {
    return (
      <div className="rounded-xl border border-peach/40 bg-coal p-8 text-center">
        <p className="font-display text-2xl font-bold text-peach">Заявка отправлена!</p>
        <p className="mt-3 font-body text-fog">Мы получили её и скоро напишем.</p>
      </div>
    );
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 font-body text-paper outline-none transition-colors placeholder:text-fog/50 focus:border-peach";

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="font-subhead text-sm text-paper">Имя</label>
        <input id="name" placeholder="Как тебя зовут?" {...register("name")} className={inputClass} />
        {errors.name && <p className="mt-1 text-sm text-peach">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="contact" className="font-subhead text-sm text-paper">Телефон или Telegram</label>
        <input id="contact" placeholder="+7… или @ник" {...register("contact")} className={inputClass} />
        {errors.contact && <p className="mt-1 text-sm text-peach">{errors.contact.message}</p>}
      </div>

      <div>
        <label htmlFor="comment" className="font-subhead text-sm text-paper">Комментарий (необязательно)</label>
        <textarea id="comment" rows={4} placeholder="Расскажи, что тебе интересно…" {...register("comment")} className={inputClass} />
        {errors.comment && <p className="mt-1 text-sm text-peach">{errors.comment.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-peach px-8 py-4 font-subhead font-semibold text-ink transition-all duration-300 hover:bg-paper disabled:opacity-60"
      >
        {status === "sending" ? "Отправляем…" : "Отправить заявку"}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>

      {status === "error" && <p className="text-center text-sm text-peach">Не получилось. Попробуйте ещё раз.</p>}
    </form>
  );
}