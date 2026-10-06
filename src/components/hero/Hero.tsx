"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { localizeHref } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { HERO_POSTER, HERO_SLIDES, HERO_VIDEO } from "./data";
import { HeroSlide } from "./HeroSlide";
import { ChevronIcon } from "./icons/ChevronIcon";
import { VolumeIcon } from "./icons/VolumeIcon";

export function Hero() {
  const { locale, t } = useI18n();
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  const posterRef = useRef<HTMLImageElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);

  // O vídeo (quase 12 MB) só começa a ser baixado depois que a página está
  // interativa e o pôster — o primeiro quadro do próprio vídeo — já apareceu,
  // para não disputar banda com o que é crítico para a primeira pintura. Fora
  // da tela ele é pausado, deixando a rolagem do restante da página livre — a
  // menos que o visitante tenha ligado o som.
  useEffect(() => {
    const video = videoRef.current;
    const poster = posterRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // A promessa é rejeitada se um pause() chegar antes do início.
        video.play().catch(() => {});
      } else if (video.muted) {
        video.pause();
      }
    });

    const start = () => observer.observe(video);
    if (!poster || poster.complete) {
      start();
    } else {
      poster.addEventListener("load", start, { once: true });
      poster.addEventListener("error", start, { once: true });
    }

    return () => {
      poster?.removeEventListener("load", start);
      poster?.removeEventListener("error", start);
      observer.disconnect();
    };
  }, []);

  // O navegador só libera autoplay com o vídeo mudo; o som é ligado
  // pelo visitante no controle de som.
  function applySound(nextMuted: boolean, nextVolume: number) {
    const video = videoRef.current;
    if (video) {
      // Ao ligar o som, o vídeo volta para o início.
      if (muted && !nextMuted) {
        video.currentTime = 0;
        void video.play();
      }
      video.volume = nextVolume;
      video.muted = nextMuted;
    }
    setMuted(nextMuted);
    setVolume(nextVolume);
  }

  return (
    <section className="relative h-[calc(100dvh-var(--spacing)*20)] overflow-hidden bg-slate-900">
      <Image
        ref={posterRef}
        src={HERO_POSTER}
        alt=""
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        preload="none"
        muted={muted}
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/55" />

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
          <SwiperSlide key={index}>
            <HeroSlide
              text={t.hero.slides[index]}
              href={localizeHref(locale, slide.ctaHref)}
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

      <div className="absolute right-4 bottom-12 z-10 flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-2 text-white sm:right-6 sm:bottom-5">
        <button
          type="button"
          aria-label={muted ? t.hero.unmute : t.hero.mute}
          aria-pressed={!muted}
          onClick={() => applySound(!muted, !muted || volume > 0 ? volume : 1)}
          className="cursor-pointer text-white/80 transition-colors duration-150 hover:text-white"
        >
          <VolumeIcon muted={muted} className="h-5 w-5" />
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={muted ? 0 : volume}
          aria-label={t.hero.volume}
          onChange={(event) => {
            const next = Number(event.target.value);
            applySound(next === 0, next);
          }}
          className="h-1 w-20 cursor-pointer accent-white sm:w-24"
        />
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
