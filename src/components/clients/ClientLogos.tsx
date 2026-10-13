"use client";

import "swiper/css";

import Image from "next/image";
import { useState } from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useI18n } from "@/i18n/I18nProvider";
import { ChevronIcon } from "../hero/icons/ChevronIcon";
import { CLIENT_LOGOS } from "./data";

export function ClientLogos() {
  const { t } = useI18n();
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="border-y border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-xs font-bold tracking-widest text-slate-500 uppercase">
          {t.clients.title}
        </p>
        <div className="mt-8 flex items-center gap-3 sm:mt-10 sm:gap-6">
          <button
            ref={setPrevEl}
            type="button"
            aria-label={t.clients.previous}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-brand-navy transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            <ChevronIcon className="h-5 w-5" />
          </button>
          <Swiper
            modules={[A11y, Autoplay, Navigation]}
            navigation={{ prevEl, nextEl, addIcons: false }}
            a11y={{
              prevSlideMessage: t.clients.previous,
              nextSlideMessage: t.clients.next,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={2}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 48 },
            }}
            loop
            className="client-logos-swiper min-w-0 flex-1"
          >
            {CLIENT_LOGOS.map((logo) => (
              <SwiperSlide key={logo.src}>
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
          <button
            ref={setNextEl}
            type="button"
            aria-label={t.clients.next}
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-slate-200 text-brand-navy transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            <ChevronIcon className="h-5 w-5 rotate-180" />
          </button>
        </div>
      </div>
    </section>
  );
}
