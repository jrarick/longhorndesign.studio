"use client";

import { motion } from "motion/react";
import { Input } from "../../ui/input";
import { getInputProps, getTextareaProps, useForm } from "@conform-to/react";
import { useFormState } from "react-dom";
import { parseWithZod } from "@conform-to/zod";
import { contact } from "@/app/actions/contact";
import { contactFormSchema } from "@/app/schemas/contact-form";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function ContactForm() {
  const [lastResult, action] = useFormState(contact, undefined);
  const [form, fields] = useForm({
    // @ts-ignore
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactFormSchema });
    },
    shouldValidate: "onSubmit",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8" id="contact">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <motion.div
          variants={{
            initial: {
              opacity: 0,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
            },
          }}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-3xl leading-relaxed text-stone-200">
            What are you waiting for cowpoke? Let's get started on your project.
          </p>
          <p className="mt-12 text-sm text-stone-400">
            Fill out the form or send an email to{" "}
            <a
              href="mailto:josh@longhorndesign.studio"
              className="underline text-stone-300"
            >
              josh@longhorndesign.studio
            </a>
          </p>
        </motion.div>
        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
          <motion.div
            variants={{
              visible: {
                transition: {
                  duration: 0.5,
                  staggerChildren: 0.15,
                  delayChildren: 0.8,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-2 gap-5"
          >
            <motion.div variants={itemVariants}>
              <Input
                aria-label="Name"
                placeholder="Name"
                {...getInputProps(fields.name, { type: "text" })}
              />
              {fields.name.errors && (
                <div
                  className="text-xs text-mexican-red-500 mt-1"
                  aria-errormessage={fields.name.id}
                >
                  {fields.name.errors}
                </div>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input
                aria-label="Email Address"
                placeholder="Email Address"
                {...getInputProps(fields.email, { type: "email" })}
              />
              {fields.email.errors && (
                <div
                  className="text-xs text-mexican-red-500 mt-1"
                  aria-errormessage={fields.email.id}
                >
                  {fields.email.errors}
                </div>
              )}
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-2">
              <Textarea
                aria-label="Message"
                placeholder="Message"
                className="min-h-48"
                {...getTextareaProps(fields.message)}
              />
              {fields.message.errors && (
                <div
                  className="text-xs text-mexican-red-500 mt-1"
                  aria-errormessage={fields.message.id}
                >
                  {fields.message.errors}
                </div>
              )}
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button type="submit" className="font-semibold">
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
