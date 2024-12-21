import {
  getInputProps,
  getTextareaProps,
  type FieldMetadata,
  type FormMetadata,
  type SubmissionResult,
} from '@conform-to/react'
import { motion } from 'motion/react'
import { Form } from 'react-router'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
}

export default function ContactForm({
  form,
  fields,
  lastResult,
}: {
  form: FormMetadata<
    {
      name: string
      email?: unknown
      message?: unknown
    },
    string[]
  >
  fields: Required<{
    name: FieldMetadata<
      string,
      {
        name: string
        email?: unknown
        message?: unknown
      },
      string[]
    >
    email?:
      | FieldMetadata<
          unknown,
          {
            name: string
            email?: unknown
            message?: unknown
          },
          string[]
        >
      | undefined
    message?:
      | FieldMetadata<
          unknown,
          {
            name: string
            email?: unknown
            message?: unknown
          },
          string[]
        >
      | undefined
  }>
  lastResult: SubmissionResult<string[]> | undefined
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <motion.p
          variants={{
            initial: {
              opacity: 0,
              filter: 'blur(10px)',
            },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
            },
          }}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl leading-relaxed text-stone-200"
        >
          What are you waiting for cowpoke? Let's get started on your project.
        </motion.p>
        <Form action="/" method="post" onSubmit={form.onSubmit} id={form.id}>
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
                {...getInputProps(fields.name, { type: 'text' })}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Input
                aria-label="Email Address"
                placeholder="Email Address"
                {...getInputProps(fields.email, { type: 'email' })}
              />
            </motion.div>
            <motion.div variants={itemVariants} className="col-span-2">
              <Textarea
                aria-label="Message"
                placeholder="Message"
                className="min-h-48"
                {...getTextareaProps(fields.message)}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button type="submit" className="font-semibold">
                Send Message
              </Button>
            </motion.div>
          </motion.div>
        </Form>
      </div>
    </div>
  )
}
