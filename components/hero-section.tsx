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

      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-4 lg:px-16 xl:px-45 text-white z-10 bg-[#1E356B]/70">
        <p
          className="font-[Aboreto] font-semibold text-lg md:text-4xl md:mb-8 tracking-[0.25em] mb-4 uppercase"
          style={{ letterSpacing: '0.2em' }}
        >
          O PROGRESSO
        </p>
        <h1 className="font-[Aclonica] text-5xl md:text-8xl font-bold leading-12 md:leading-20 max-w-xl text-[#F59F26]">
          É O NOSSO <br /> PRODUTO
        </h1>
      </div>
    </div>
  )
}
