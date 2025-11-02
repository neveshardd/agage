'use client'

import emailjs from '@emailjs/browser'
import { useState } from 'react'

export default function FooterSection() {
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
    <section id="contato" className="w-full">
      {/* Grid que mantém as colunas com mesma altura */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-stretch">
        {/* LADO ESQUERDO - fundo full width, conteúdo centralizado até max-w-6xl */}
        <div className="relative w-full overflow-hidden">
          {/* imagem de fundo (full-bleed dentro da coluna) */}
          <div
            aria-hidden
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: "url('/alexandr_bendus-8aVMSi7obhQ-unsplash.jpg')",
            }}
          />
          {/* overlay para contraste */}
          <div className="absolute inset-0 bg-white/90" />

          {/* conteúdo limitado à max-w-6xl e centralizado na coluna */}
          <div className="relative z-10 flex justify-center">
            <div className="max-w-6xl w-full px-6 lg:px-10 py-16 flex flex-col justify-center">
              <img
                src="/agage-colors.png"
                alt="Logo Agage"
                className="w-44 md:w-56 mb-6"
              />

              <div className="space-y-6 max-w-md">
                <div>
                  <p className="text-lg md:text-xl font-semibold mb-1">E-mail:</p>
                  <p className="text-[#1B3E9F] text-base md:text-lg wrap-break-words">
                    engenharia@agage.com.br
                  </p>
                </div>

                <div>
                  <p className="text-lg md:text-xl font-semibold mb-1">Endereço:</p>
                  <p className="text-[#1B3E9F] text-base md:text-lg">
                    Edifício Itaú - Parque Ferroviário de Brasília - SIA Trecho 3 - Brasília/DF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO - fundo branco, formulário limitado à max-w-6xl */}
        <div className="bg-white flex justify-center">
          <div className="w-full px-6 lg:px-10 py-16 flex flex-col justify-start">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#1B3E9F] mb-6">Contato</h2>

            <div className="w-16 h-0.5 bg-black/20 mb-8" />

            <form className="space-y-6 w-full" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Nome"
                  className="border border-black/10 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1B3E9F]/30"
                />
                <input
                  name="reply_to"
                  type="email"
                  placeholder="Email"
                  className="border border-black/10 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#1B3E9F]/30"
                />
              </div>

              <textarea
                name="message"
                placeholder="Mensagem"
                className="border border-black/10 rounded-md px-4 py-3 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#1B3E9F]/30"
              />

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#FF9800] text-white font-medium px-10 py-3 rounded-md hover:bg-[#e68a00] transition"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* RODAPÉ full width; conteúdo interno também limitado a max-w-6xl */}
      <footer className="bg-gray-500 text-white text-center px-4 py-6">
        <div className="mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-2 text-sm">
          <p>Agage Construtora LTDA © 2025 - Todos os direitos reservados.</p>
          <p className="text-white hover:underline cursor-pointer transition">
            Desenvolvido por José Eugênio
          </p>
        </div>
      </footer>
    </section>
  )
}
