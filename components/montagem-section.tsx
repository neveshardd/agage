import Image from "next/image"

export default function MontagemSection() {
  const images = [
    { src: "/OFAS0010.JPEG", alt: "Trabalhador em manutenção industrial" },
    { src: "/BXYW7288.JPEG", alt: "Estrutura industrial metálica" },
    { src: "/HDYD2285.JPG", alt: "Equipe de engenheiros em fábrica" },
    { src: "/IMG_0506.JPG", alt: "Instalações industriais de grande porte" },
  ]

  return (
    <section className="bg-slate-50/50 py-16 md:py-24 px-6" id="montagem-industrial">
      <div className="max-w-6xl mx-auto">
        {/* Superior Section: Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black text-[#1A3767] leading-[1.1] tracking-tight">
                Fornecimento de <br />
                <span className="text-[#F59F26]">Mão de Obra Especializada</span>
              </h2>
            </div>
            <div className="hidden lg:block w-32 h-px bg-gray-300 transform -translate-y-6"></div>
            <div className="max-w-xs">
              <p className="text-gray-400 text-sm font-medium uppercase tracking-widest leading-relaxed">
                Referência em Grandes Paradas Industriais e Gestão de Ativos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Main Content Card */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-[#F59F26] rounded-full hidden md:block"></div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                  Nossa equipe altamente qualificada é referência em serviços de <strong className="font-bold text-[#1A3767]">Grande Paralização</strong>, oferecendo soluções completas para indústrias de alta demanda, como, caldeiraria, manutenção de fornos, esteiras transportadoras, solda especializada, tanques de armazenamento e silos de sementes.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Mobilização", desc: "Agilidade em integração em mão de obra e equipamentos" },
                  { label: "Eficiência", desc: "Gestão de tempo" },
                  { label: "Segurança", desc: "Protocolos SSMA" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-[#1A3767] font-bold text-sm mb-1">{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Differential Box */}
              <div className="bg-[#1A3767] p-8 rounded-2xl text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59F26]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <h4 className="text-[#F59F26] font-bold text-xs uppercase tracking-widest mb-3">Nosso Diferencial</h4>
                <p className="text-lg leading-relaxed font-medium italic opacity-90">
                  &quot;Entendemos o custo da parada. Focamos em zero retrabalho e cumprimento de prazos, garantindo segurança operacional total.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Mosaic Gallery Column */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-6 gap-3">
              <div className="col-span-6 rounded-xl overflow-hidden relative h-[350px]">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1A3767]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-[#F59F26] font-bold text-[10px] uppercase tracking-widest mb-1">Case de Sucesso</p>
                  <h3 className="text-xl font-black uppercase">Engenharia de Precisão</h3>
                </div>
              </div>
              <div className="col-span-3 rounded-xl overflow-hidden h-64 relative">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="col-span-3 rounded-xl overflow-hidden h-64 relative">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>

        {/* New Large Featured Image */}
        <div className="mt-12 md:mt-20">
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[600px] shadow-2xl group">
            <Image
              src={images[3].src}
              alt={images[3].alt}
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1A3767]/50 via-transparent to-transparent"></div>
            <div className="absolute top-0 bottom-0 left-0 w-2 bg-[#F59F26] hidden md:block"></div>

            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
              <div className="max-w-2xl">
                <h3 className="text-xl md:text-5xl font-black text-white leading-tight uppercase drop-shadow-lg">
                  Infraestrutura de <br className="hidden md:block" /> Alto Impacto
                </h3>
              </div>
              <div className="bg-[#1A3767]/60 backdrop-blur-md border border-white/10 p-3 md:p-6 rounded-xl md:rounded-2xl max-w-fit md:max-w-none">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-[#F59F26] rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 md:w-6 md:h-6 text-[#1A3767]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-xs md:text-base">Padrão AGAGE</p>
                    <p className="text-white/70 text-[10px] md:text-sm">Qualidade sem concessões</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
