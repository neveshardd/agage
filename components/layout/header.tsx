'use client'

import { useEffect, useState } from 'react'
import LanguageDialog from './language-dialog'
import MenuButton from './menu-button'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const heroSection = document.querySelector('#hero')
    if (!heroSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        // Quando o hero sai da tela (menos de 10% visível), ativa o header fixo
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(heroSection)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`top-0 left-0 w-full z-50 px-4 ${scrolled
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

        <img src="/agage-colors.png" alt="Agage Construtora LTDA" className={`w-40 ml-18 ${scrolled ? 'block' : 'hidden'}`} />

        {/* Botão direito */}
        <a
          href="#contato"
          className={`uppercase font-semibold hover:underline transition-all duration-300 text-sm lg:text-lg ${scrolled ? 'text-[#1a3767] hidden md:block' : 'text-white'}`}
        >
          Entrar em contato
        </a>
      </div>
    </header>
  )
}
