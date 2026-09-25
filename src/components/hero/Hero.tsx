"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { type CSSProperties, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { localizeHref } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { HERO_SLIDES } from "./data";
import { HeroSlide } from "./HeroSlide";
import { ChevronIcon } from "./icons/ChevronIcon";

export function Hero() {
  const { locale, t } = useI18n();
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  return (
    <section className="relative h-[calc(100dvh-var(--spacing)*20)]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ prevEl, nextEl }}
        pagination={{ el: paginationEl, clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        observer
        observeParents
        loop
        className="h-full w-full"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.image}>
            <HeroSlide
              slide={slide}
              text={t.hero.slides[index]}
              href={localizeHref(locale, slide.ctaHref)}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 z-10 mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          ref={setPrevEl}
          type="button"
          aria-label={t.hero.previous}
          className="pointer-events-auto hidden cursor-pointer items-center justify-center text-white/80 transition-colors duration-150 hover:text-white"
        >
          <ChevronIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
        <button
          ref={setNextEl}
          type="button"
          aria-label={t.hero.next}
          className="pointer-events-auto hidden cursor-pointer items-center justify-center text-white/80 transition-colors duration-150 hover:text-white"
        >
          <ChevronIcon className="h-6 w-6 rotate-180 sm:h-8 sm:w-8" />
        </button>
      </div>

      <div
        ref={setPaginationEl}
        className="absolute inset-x-0 bottom-5 z-10 flex items-center justify-center gap-2"
        style={
          {
            "--swiper-pagination-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": 0.5,
            "--swiper-pagination-bullet-width": "24px",
            "--swiper-pagination-bullet-height": "4px",
            "--swiper-pagination-bullet-border-radius": "2px",
          } as CSSProperties
        }
      />
    </section>
  );
}
