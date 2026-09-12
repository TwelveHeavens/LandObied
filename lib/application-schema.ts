import { z } from "zod";

export const applicationSchema = z.object({
  name: z.string().min(2, "Укажите имя").max(55, "Слишком длинное имя"),
  contact: z.string().min(3, "Телефон или @ник в Telegram").max(100, "Слишком длинно"),
  comment: z.string().max(1000, "Слишком длинно").optional(),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;