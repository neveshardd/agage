import Image from "next/image";
import { getI18n } from "@/i18n/server";

export async function Ombudsman() {
  const { t } = await getI18n();

  return (
    <section
      id="ouvidoria"
      className="relative h-64 w-full overflow-hidden sm:h-72 lg:h-80"
    >
      <Image
        src="/equipe-formas.jpg"
        alt={t.ombudsman.imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-brand-orange/75 via-brand-orange/85 to-brand-orange-dark/95 sm:from-brand-orange/15 sm:via-brand-orange/75 sm:to-brand-orange-dark/95" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex flex-col items-start gap-4">
          <div className="relative h-10 w-24 sm:h-12 sm:w-28">
            <Image
              src="/ouvidoria.png"
              alt={t.ombudsman.logoAlt}
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>

          <a
            href="https://app.intuix.com.br/canal-de-ouvidoria/c853cd54-5c40-4cf2-bb02-092d52f01a00"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.ombudsman.qrLabel}
            className="relative h-40 w-40 overflow-hidden rounded-lg bg-white p-3 transition-opacity duration-150 hover:opacity-90 sm:h-48 sm:w-48"
          >
            <Image
              src="/ouvidoria-qr.png"
              alt={t.ombudsman.qrAlt}
              fill
              sizes="192px"
              className="object-contain"
            />
          </a>
        </div>

        <div className="max-w-md text-right text-white">
          <h2 className="text-2xl font-bold text-balance sm:text-3xl">
            {t.ombudsman.title}
          </h2>
          <p className="mt-3 text-base text-white/90 sm:text-lg">
            {t.ombudsman.text}
          </p>
        </div>
      </div>
    </section>
  );
}
