"use server";

import { parseWithZod } from "@conform-to/zod";
import { contactFormSchema } from "../schemas/contact-form";

export async function contact(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: contactFormSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  console.log("Form submitted successfully:", submission.payload);
}
