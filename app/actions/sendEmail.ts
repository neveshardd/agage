'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function sendEmailAction(formData: FormData) {
  const name = formData.get('from_name') as string
  const email = formData.get('reply_to') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { error: 'Preencha todos os campos.' }
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Site Agage <contato@agage.com.br>',
      to: ['administrativo@agage.com.br'],
      cc: ['engenharia@agage.com.br'],
      subject: `Novo contato de ${name}`,
      replyTo: email,
      text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
    })

    if (error) {
      console.error('Erro no Resend:', error)
      return { error: 'Ocorreu um erro ao enviar o e-mail.' }
    }

    return { success: true, data }
  } catch (err) {
    console.error('Erro interno:', err)
    return { error: 'Ocorreu um erro interno ao enviar o e-mail.' }
  }
}
