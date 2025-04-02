"use server";

import { parseWithZod } from "@conform-to/zod";
import { contactFormSchema } from "@/app/schemas/contact-form";
import { Resend } from "resend";
import { redirect } from "next/navigation";

export async function contact(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: contactFormSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "noreply@longhorndesign.studio",
    to: "josh@longhorndesign.studio",
    subject: "New Contact Form Submission",
    html: `
      <div>
        <h1>New Contact Form Submission</h1>
        <p>Name: ${submission.value.name}</p>
        <p>Email: ${submission.value.email}</p>
        <p>Message: ${submission.value.message}</p>
      </div>
    `,
  });

  if (!error) redirect("/contact-success");

  if (error) redirect("/contact-failure")
}
