'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

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
          <img
            src="/votorantim-26-03-2026.jpeg"
            alt=""
            className='h-full w-full object-cover'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/ian-WKfoiXpIG_c-unsplash.jpg"
            alt=""
            className='h-full w-full object-cover'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/shraga-kopstein-BzpifKdSbwU-unsplash.jpg"
            alt=""
            className='h-full w-full object-cover'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/vadym-alyekseyenko-rMLEf36dLKE-unsplash.jpg"
            alt=""
            className='h-full w-full object-cover'
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute inset-0 flex flex-col justify-center gap-4 items-center px-4 md:px-4 lg:px-16 xl:px-45 text-white z-10 bg-black/50">
        <img src="/agage-colors.png" alt="Agage Construtora LTDA" />
      </div>
    </div>
  )
}
