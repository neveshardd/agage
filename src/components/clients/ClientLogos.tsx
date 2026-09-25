"use client";

import "swiper/css";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useI18n } from "@/i18n/I18nProvider";
import { CLIENT_LOGOS } from "./data";

export function ClientLogos() {
  const { t } = useI18n();
  return (
    <section className="border-y border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-xs font-bold tracking-widest text-slate-400 uppercase">
          {t.clients.title}
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={5000}
          loop
          allowTouchMove={false}
          slidesPerView={2}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 48 },
            1024: { slidesPerView: 5, spaceBetween: 56 },
          }}
          className="mt-8 sm:mt-10"
        >
          {CLIENT_LOGOS.map((logo) => (
            <SwiperSlide key={logo.src} className="flex items-center">
              <div className="relative h-10 w-full sm:h-12">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="180px"
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
