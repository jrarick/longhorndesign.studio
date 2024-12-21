import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { Resend } from 'resend'
import ContactForm from '~/components/page-sections/contact-form'
import Hero from '~/components/page-sections/hero'
import Info from '~/components/page-sections/info'
import Steps from '~/components/page-sections/steps'
import { contactFormSchema } from '~/schemas/contact-form'
import type { Route } from './+types/_index'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New Remix App' },
    {
      name: 'description',
      content: 'Welcome to Remix on Cloudflare!',
    },
  ]
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const submission = parseWithZod(formData, { schema: contactFormSchema })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY)

  const { data, error } = await resend.emails.send({
    from: '<noreply@longhorndesign.studio>',
    to: 'josh@longhorndesign.studio',
    subject: 'New Contact Form Submission',
    html: `
      <div>
        <h1>New Contact Form Submission</h1>
        <p>Name: ${submission.value.name}</p>
        <p>Email: ${submission.value.email}</p>
        <p>Message: ${submission.value.message}</p>
      </div>
    `,
  })
}

export default function Index({ actionData }: Route.ComponentProps) {
  const [form, fields] = useForm({
    lastResult: actionData,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: contactFormSchema })
    },
    shouldValidate: 'onSubmit',
    shouldRevalidate: 'onInput',
  })

  return (
    <>
      <Hero />
      <Info />
      <Steps />
      <ContactForm form={form} fields={fields} lastResult={actionData} />
    </>
  )
}
