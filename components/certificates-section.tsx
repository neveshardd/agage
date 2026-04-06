import Image from "next/image"

export default function CertificatesSection() {
  const certificates = [
    { src: "/badge (1).png", alt: "Certificado ISO" },
    { src: "/badge (2).png", alt: "Certificado de Qualidade" },
    { src: "/badge (3).png", alt: "Certificado de Segurança" },
    { src: "/badge (4).png", alt: "Selo de Excelência" },
    { src: "/badge (5).png", alt: "Comprometimento Ambiental" },
    { src: "/badge (6).png", alt: "Badge de Sustentabilidade" },
    { src: "/badge (7).png", alt: "Prêmio de Engenharia" },
    { src: "/badge (8).png", alt: "Certificado Técnico" },
    { src: "/badge.png", alt: "Certificado Agage" },
  ]

  return (
    <section className="bg-white py-24 md:py-32" id="certificados">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header da Seção */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#F59F26]/10 text-[#F59F26] text-sm font-bold uppercase tracking-widest rounded-full mb-4">
            Reconhecimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A3767] leading-tight max-w-3xl">
            Nossa Qualidade é <span className="text-[#F59F26]">Certificada</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#F59F26] mt-6 rounded-full"></div>
          <p className="mt-8 text-gray-500 max-w-2xl text-lg md:text-xl font-light">
            Trabalhamos com os mais altos padrões de segurança, sustentabilidade e eficiência técnica, garantindo resultados excepcionais em cada projeto.
          </p>
        </div>

        {/* Grid de Badges Simples e Estático, organizado em 2 linhas */}
        <div className="flex flex-col gap-8 md:gap-12 pt-8">
          {/* Primeira Linha (5 itens) */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {certificates.slice(0, 5).map((cert, index) => (
              <div key={`row1-${index}`} className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Segunda Linha (4 itens) */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            {certificates.slice(5).map((cert, index) => (
              <div key={`row2-${index}`} className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
