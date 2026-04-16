"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import Image from "next/image"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"

import { Swiper as SwiperCore } from "swiper/types"

export default function ClientsSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)

  const clients = [
    { name: "ETERC Engenharia", logo: "/client/logo-eterc-reta.png" },
    { name: "Conserva Engenharia", logo: "/client/logo-conserva-reta.png" },
    { name: "BTEC Construções", logo: "/client/logo-btec-reta.png" },
    { name: "CNI", logo: "/client/cni-logo-1-scaled.png" },
    { name: "CEMIG", logo: "/client/cemig-logo-0.png" },
    { name: "CEB", logo: "/client/logo-ceb 1.png" },
    { name: "VOTORANTIM", logo: "/client/Votorantim_Cimentos_Logo.png" },
    { name: "Prefeitura de Anápolis", logo: "/client/logotipo-scaled.png" },
    { name: "FICO", logo: "/client/FICO-e1733330677310.png" },
    { name: "Andrade Gutierrez", logo: "/client/logo-andrade-reta.png" },
    { name: "Fundação Renova", logo: "/client/logo-fundacao-renova-reta.png" },
    { name: "HTB", logo: "/client/logo-htb-reta.png" },
    { name: "OAS", logo: "/client/logo-oas-reta.png" },
    { name: "Sacyr", logo: "/client/logo-sacyr-reta.png" },
    { name: "Pan American Energy", logo: "/client/Pan_American_Energy_logo.svg_.png" },
    { name: "Rumo", logo: "/client/logo-rumo-reta.png" },
    { name: "Vereda", logo: "/client/logo-vereda-reta.png" },
    { name: "BRT Goiânia", logo: "/client/logo-brt-goiania-reta-color.png" },
  ]

  return (
    <section className="bg-gray-50 py-24 md:py-32 px-4 md:px-0 relative overflow-hidden" id="clientes">
      {/* Título */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F59F26]">
          Clientes
        </h2>
        <div className="w-20 h-[3px] bg-[#F59F26] mx-auto mt-3"></div>
      </div>

      {/* Swiper Container with Navigation */}
      <div className="max-w-6xl mx-auto relative px-12 md:px-16">
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="flex items-center justify-center pointer-events-auto"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4">
                <div className="relative w-full h-24 md:h-20">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain transition-all duration-300"
                    unoptimized
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões de Navegação Customizados */}
        <button 
          onClick={() => swiperInstance?.slidePrev()}
          className="client-prev absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-[#1A3767] hover:bg-[#F59F26] hover:text-white transition-all duration-300 border border-gray-200 shadow-xl cursor-pointer"
          aria-label="Anterior"
        >
          <CaretLeft size={24} className="md:w-6 md:h-6" weight="bold" />
        </button>

        <button 
          onClick={() => swiperInstance?.slideNext()}
          className="client-next absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white text-[#1A3767] hover:bg-[#F59F26] hover:text-white transition-all duration-300 border border-gray-200 shadow-xl cursor-pointer"
          aria-label="Próximo"
        >
          <CaretRight size={24} className="md:w-6 md:h-6" weight="bold" />
        </button>
      </div>
    </section>
  )
}


