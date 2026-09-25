import Image from "next/image";
import { getI18n } from "@/i18n/server";
import { CERTIFICATION_BADGES } from "./data";

export async function Certifications() {
  const { t } = await getI18n();

  return (
    <section
      id="certificacoes"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <Image
        src="/obra-aerea.jpg"
        alt={t.certifications.imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-blue/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white lg:px-10">
        <h2 className="text-2xl font-extrabold text-balance uppercase sm:text-3xl">
          {t.certifications.title}
        </h2>
        <p className="mt-3 text-sm text-white/90 sm:text-base">
          {t.certifications.text}
        </p>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-6 sm:gap-8">
          {CERTIFICATION_BADGES.map((badge, index) => (
            <div key={badge.src} className="relative h-36 w-36 sm:h-44 sm:w-44">
              <Image
                src={badge.src}
                alt={t.certifications.badges[index]}
                fill
                sizes="176px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
