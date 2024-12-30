import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string({ required_error: "Email is required" }).email("Email is invalid")
  ),
  message: z.preprocess(
    (value) => (value === "" ? undefined : value),
    z
      .string({ required_error: "Message is required" })
      .min(10, "Message is too short. Minimum 10 characters allowed.")
      .max(10_000, "Message is too long. Maximum 10,000 characters allowed.")
  ),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
