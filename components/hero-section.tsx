'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/effect-fade'
import '@fontsource/aboreto'
import '@fontsource/aclonica'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen" id="hero">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
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
            src="/votorantim-26-03-2026.jpg"
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

      <div className="absolute inset-0 flex flex-col justify-center gap-4 items-center px-4 md:px-4 lg:px-16 xl:px-45 text-white z-10 bg-black/50">
        <div className="relative w-72 md:w-144 h-48">
          <Image
            src="/agage-colors.png"
            alt="Agage Construtora LTDA"
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
