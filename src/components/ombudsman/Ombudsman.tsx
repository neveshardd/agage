import Image from "next/image";
import { getI18n } from "@/i18n/server";

const OMBUDSMAN_URL =
  "https://app.intuix.com.br/canal-de-ouvidoria/c853cd54-5c40-4cf2-bb02-092d52f01a00";

const BUTTON_CLASS =
  "items-center justify-center whitespace-nowrap rounded-full bg-brand-navy px-5 py-2.5 text-sm font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-brand-navy/90";

export async function Ombudsman() {
  const { t, images } = await getI18n();

  return (
    <section
      id="ouvidoria"
      aria-labelledby="ombudsman-title"
      className="mx-auto w-full max-w-screen-2xl px-6 py-16 sm:py-20 lg:px-10"
    >
      <div className="rounded-2xl bg-brand-navy px-6 py-14 sm:px-12 lg:px-20 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className="text-white">
            <div className="relative mb-6 h-10 w-24 sm:h-12 sm:w-28">
              <Image
                src={images["ombudsman.logo"]}
                alt={t.ombudsman.logoAlt}
                fill
                sizes="112px"
                className="object-contain object-left"
              />
            </div>
            <h2
              id="ombudsman-title"
              className="max-w-lg text-3xl leading-tight text-balance sm:text-4xl"
            >
              {t.ombudsman.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
              {t.ombudsman.text}
            </p>
          </div>

          <div
            data-reveal
            className="flex flex-col items-start gap-6 rounded-xl bg-brand-orange p-6 text-brand-navy sm:flex-row sm:items-center sm:p-8"
          >
            <div className="flex-1">
              <p className="leading-relaxed">{t.ombudsman.cardText}</p>
              {/* Lado a lado com o QR Code (sm+): botão junto do texto. */}
              <a
                href={OMBUDSMAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 hidden sm:inline-flex ${BUTTON_CLASS}`}
              >
                {t.ombudsman.button}
              </a>
            </div>

            <a
              href={OMBUDSMAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.ombudsman.qrLabel}
              className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg bg-white transition-opacity duration-150 hover:opacity-90"
            >
              <Image
                src={images["ombudsman.qr"]}
                alt={t.ombudsman.qrAlt}
                fill
                sizes="128px"
                className="object-contain p-2"
              />
            </a>

            {/* Celular (empilhado): botão abaixo do QR Code. */}
            <a
              href={OMBUDSMAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex sm:hidden ${BUTTON_CLASS}`}
            >
              {t.ombudsman.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
