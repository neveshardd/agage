'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactSection() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      from_name: formData.get('from_name'),
      reply_to: formData.get('reply_to'),
      message: formData.get('message'),
    }

    try {
      await emailjs.send(
        'service_0sg1evf',
        'template_gj3vqee',
        data,
        'gNiej07huHfotH8Dh'
      )
      setSent(true)
    } catch (error) {
      console.error(error)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="py-24 md:py-32 px-4 md:px-0 bg-gray-50" id="contato">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#F59F26]">
          Entre em Contato
        </h2>
        <div className="w-20 h-[3px] bg-[#F59F26] mx-auto mt-3"></div>
        <p className="text-gray-700 mt-6 max-w-2xl mx-auto">
          Envie sua mensagem e nossa equipe retornará o mais breve possível.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form
          onSubmit={sendEmail}
          className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-gray-100 flex flex-col gap-5"
        >
          <Input
            name="from_name"
            placeholder="Seu nome"
            required
            className="border-gray-300 rounded-none focus-visible:ring-[#F59F26]"
          />
          <Input
            name="reply_to"
            type="email"
            placeholder="Seu e-mail"
            required
            className="border-gray-300 rounded-none focus-visible:ring-[#F59F26]"
          />
          <Textarea
            name="message"
            placeholder="Sua mensagem"
            required
            className="min-h-[120px] rounded-none border-gray-300 focus-visible:ring-[#F59F26]"
          />

          <Button
            type="submit"
            disabled={sending || sent}
            className="bg-[#F59F26] rounded-none cursor-pointer hover:bg-[#e48f1e] text-white w-full flex items-center justify-center gap-2 transition-colors"
          >
            <Send className="w-4 h-4" />
            {sent ? 'Mensagem enviada!' : sending ? 'Enviando...' : 'Enviar mensagem'}
          </Button>
        </form>

        <div className="mt-10 flex flex-col items-center gap-2 text-gray-700">
          <Mail className="w-5 h-5 text-[#1A3767]" />
          <a
            href="mailto:engenharia@agage.com.br"
            className="text-[#1A3767] hover:text-[#F59F26] transition-colors"
          >
            engenharia@agage.com.br
          </a>
        </div>
      </div>
    </section>
  )
}
