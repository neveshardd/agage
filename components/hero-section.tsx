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
            src="/alexandr_bendus-8aVMSi7obhQ-unsplash.jpg"
            alt=""
            className='h-full w-full object-cover'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/david-griffiths-F3ZxOdft-rQ-unsplash.jpg"
            alt=""
            className='h-full w-full object-cover'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/ian-A1T1A8D2SPo-unsplash.jpg"
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
        <img src="/agage.png" alt="Agage Construtora LTDA" />
        <h1 className='tracking-[0.8em] md:text-3xl'>CONSTRUTORA</h1>
      </div>
    </div>
  )
}
