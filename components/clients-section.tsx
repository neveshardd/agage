"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from "swiper/modules"

export default function ClientsSection() {
  const clients = [
    { name: "ETERC Engenharia", logo: "/client/logo-eterc-reta.png" },
    { name: "Conserva Engenharia", logo: "/client/logo-conserva-reta.png" },
    { name: "BTEC Construções", logo: "/client/logo-btec-reta.png" },
    { name: "CNI", logo: "/client/cni-logo-1-scaled.png" },
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
    <section className="bg-gray-50 py-24 md:py-32 px-4 md:px-0" id="clientes">
      {/* Título */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#F59F26]">
          Clientes
        </h2>
        <div className="w-20 h-[3px] bg-[#F59F26] mx-auto mt-3"></div>
      </div>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="flex items-center justify-center"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
