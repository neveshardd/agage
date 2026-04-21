'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import MenuButton from './menu-button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)

  useEffect(() => {
    const heroSection = document.querySelector('#hero')
    const hideZoneSections = [
      document.querySelector('#ouvidoria'),
      document.querySelector('#contato')
    ].filter(Boolean) as HTMLElement[]

    // Rastreador interno para evitar problemas de concorrência no IntersectionObserver
    const visibilityMap = new Map<HTMLElement, boolean>()

    const heroObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const hideObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          visibilityMap.set(entry.target as HTMLElement, entry.isIntersecting)
        })
        
        // Verifica se qualquer seção da zona de esconder está visível
        const isAnyVisible = Array.from(visibilityMap.values()).some(v => v)
        setHideHeader(isAnyVisible)
      },
      { threshold: 0 } // No mobile, detecção imediata ao tocar em 1px
    )

    if (heroSection) heroObserver.observe(heroSection)
    hideZoneSections.forEach(section => {
      if (section) hideObserver.observe(section)
    })

    return () => {
      heroObserver.disconnect()
      hideObserver.disconnect()
    }
  }, [])

  return (
    <header
      className={`${hideHeader ? 'hidden' : 'block'} top-0 left-0 w-full z-50 px-4 ${scrolled
        ? 'fixed bg-white text-[#1a3767] border-black/10 border-b shadow-md'
        : 'absolute bg-transparent text-white border-white/20 border-b'
        }`}
    >
      <div className="flex justify-between items-center py-6 max-w-6xl mx-auto">
        {/* Lado esquerdo */}
        <div className={`flex space-x-4 pr-6 border-r md:border-none ${scrolled ? 'border-none' : ''}`}>
          <MenuButton />
          {/* <LanguageDialog /> */}
        </div>

        <div className={`relative w-40 h-8 ml-18 ${scrolled ? 'block' : 'hidden'}`}>
          <Image
            src="/agage-colors.png"
            alt="Agage engenharia e Montagem Industrial"
            fill
            className="object-contain"
            priority
            loading="eager"
            unoptimized
          />
        </div>

        {/* Botões direitos */}
        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="#ouvidoria"
            className={`uppercase font-semibold hover:underline transition-all duration-300 text-sm lg:text-lg ${scrolled ? 'text-[#1a3767] hidden md:block' : 'text-white'}`}
          >
            Ouvidoria
          </a>
          <a
            href="#contato"
            className={`uppercase font-semibold hover:underline transition-all duration-300 text-sm lg:text-lg ${scrolled ? 'text-[#1a3767] hidden md:block' : 'text-white'}`}
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </header>
  )
}
