'use client'

import { sendEmailAction } from '@/app/actions/sendEmail'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Check } from 'lucide-react'
import gsap from 'gsap'

export default function FooterSection() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const buttonRef = useRef<HTMLButtonElement>(null)
  const checkRef = useRef<SVGSVGElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let timer: NodeJS.Timeout
    let tl: gsap.core.Timeline

    if (sent && buttonRef.current && checkRef.current && textRef.current) {
      tl = gsap.timeline()

      tl.to(textRef.current, { opacity: 0, duration: 0.2 })
        .to(
          buttonRef.current,
          {
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#22c55e', // Green 500
            padding: 0,
            duration: 0.5,
            ease: 'back.out(1.5)',
          },
          '<'
        )
        .fromTo(
          checkRef.current,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'back.out(2)' }
        )

      // Após 5 segundos, reverte a animação e permite novo envio
      timer = setTimeout(() => {
        tl.reverse().then(() => {
          setSent(false)
          gsap.set([buttonRef.current, textRef.current, checkRef.current], { clearProps: 'all' })
        })
      }, 5000)
    }

    return () => {
      if (timer) clearTimeout(timer)
      if (tl) tl.kill()
    }
  }, [sent])

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    setError(null)
    setSent(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const result = await sendEmailAction(formData)
      if (result?.error) {
        setError(result.error)
      } else {
        setSent(true)
        form.reset()
      }
    } catch (err) {
      console.error(err)
      setError('Erro inesperado ao enviar o e-mail.')
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
          <div aria-hidden className="absolute inset-0">
            <Image
              src="/IZXX4329.JPEG"
              alt="Background"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
          {/* overlay para contraste */}
          <div className="absolute inset-0 bg-white/70" />

          {/* conteúdo limitado à max-w-6xl e centralizado na coluna */}
          <div className="relative z-10 flex justify-center">
            <div className="max-w-6xl w-full px-6 lg:px-10 py-16 flex flex-col justify-center">
              <div className="relative w-44 md:w-56 h-20 mb-6">
                <Image
                  src="/agage-colors.png"
                  alt="Logo Agage"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>

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

        {/* LADO DIREITO - fundo cinza, formulário limitado à max-w-6xl */}
        <div className="bg-gray-50 flex justify-center">
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

              <div className="flex flex-col items-center gap-4 min-h-[100px]">
                <button
                  ref={buttonRef}
                  type="submit"
                  disabled={sending || sent}
                  className="relative flex items-center justify-center bg-[#FF9800] text-white font-medium rounded-md hover:bg-[#e68a00] transition-colors disabled:opacity-70 w-[150px] h-[52px]"
                >
                  <span ref={textRef} className="absolute inset-0 flex items-center justify-center transition-opacity">
                    {sending ? 'Enviando...' : 'Enviar'}
                  </span>
                  <Check
                    ref={checkRef}
                    size={28}
                    className="absolute opacity-0"
                    strokeWidth={3}
                  />
                </button>
                {/* Removemos a mensagem estática "E-mail enviado..." pois o check agora dá o feedback visual claro */}
                {error && <p className="text-red-500 font-medium">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* RODAPÉ full width; conteúdo interno também limitado a max-w-6xl */}
      <footer className="bg-white text-gray-600 text-center px-4 py-6">
        <div className="mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-2 text-sm">
          <p>Agage Construtora LTDA © 2025 - Todos os direitos reservados.</p>
          <p className="hover:text-[#1B3E9F] hover:underline cursor-pointer transition">
            <Link href="https://github.com/neveshardd/agage">
              Desenvolvido por José Eugênio
            </Link>
          </p>
        </div>
      </footer>
    </section>
  )
}
