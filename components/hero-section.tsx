'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import Image from 'next/image'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import '@fontsource/aboreto'
import '@fontsource/aclonica'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen" id="hero">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect='fade'
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        className='h-screen md:w-screen'
      >
        <SwiperSlide>
          <Image
            src="/viaduto-building.jpg"
            alt="Hero Background 1"
            fill
            className='object-cover'
            priority
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/votorantim-26-03-2026.jpeg"
            alt="Hero Background 5"
            fill
            className='object-cover'
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/viaduto-building02.jpg"
            alt="Hero Background 2"
            fill
            className='object-cover'
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/terminal-construction.jpg"
            alt="Hero Background 3"
            fill
            className='object-cover'
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/terminal-construction02.jpg"
            alt="Hero Background 4"
            fill
            className='object-cover'
            unoptimized
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/cidade-intervention.jpg"
            alt="Hero Background 5"
            fill
            className='object-cover'
            unoptimized
          />
        </SwiperSlide>
      </Swiper>

      {/* Botões de Navegação Customizados */}
      <button className="hero-prev absolute left-4 top-[65%] md:top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 text-[#F59F26] hover:bg-[#F59F26] hover:text-white transition-all duration-300 border border-[#F59F26]/30 backdrop-blur-md cursor-pointer">
        <CaretLeft size={28} className="md:w-8 md:h-8" weight="bold" />
      </button>

      <button className="hero-next absolute right-4 top-[65%] md:top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/40 text-[#F59F26] hover:bg-[#F59F26] hover:text-white transition-all duration-300 border border-[#F59F26]/30 backdrop-blur-md cursor-pointer">
        <CaretRight size={28} className="md:w-8 md:h-8" weight="bold" />
      </button>

      <div className="absolute inset-0 flex flex-col justify-center pb-24 items-center px-4 md:px-4 lg:px-16 xl:px-45 text-white z-10 bg-black/50 pointer-events-none">
        <div className="relative w-80 md:w-[750px] h-64">
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
      </div>
    </div>
  )
}
