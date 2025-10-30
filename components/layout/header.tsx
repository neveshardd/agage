'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
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
      className={`top-0 left-0 w-full z-50 px-4 transition-all duration-500 ${
        scrolled
          ? 'fixed bg-[#1A3767] text-white shadow-md'
          : 'absolute bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center py-6 max-w-6xl mx-auto">
        {/* Lado esquerdo */}
        <div className="flex space-x-4">
          <MenuButton />
          <LanguageDialog />
        </div>

        {/* Logo */}
        <Link href="/">
          <img
            src={'/agage.png'}
            alt="Logo"
            className="h-8 transition-all duration-300"
          />
        </Link>

        {/* Botão direito */}
        <a
          href="#contato"
          className={`uppercase font-semibold hover:underline transition-all duration-300 hidden lg:block ${'text-white'
          }`}
        >
          Entrar em contato
        </a>
      </div>
    </header>
  )
}
