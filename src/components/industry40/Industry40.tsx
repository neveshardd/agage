import Image from "next/image";
import { getI18n } from "@/i18n/server";

export async function Industry40() {
  const { t } = await getI18n();

  return (
    <section
      id="mao-de-obra"
      className="relative h-80 w-full overflow-hidden sm:h-90 lg:h-100"
    >
      <Image
        src="/mao-de-obra.jpg"
        alt={t.skilledLabor.imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-l from-brand-blue/75 via-brand-blue/85 to-brand-blue-dark/95 sm:from-brand-blue/15 sm:via-brand-blue/75 sm:to-brand-blue-dark/95" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-xl text-white sm:mr-auto">
          <h2 className="text-3xl leading-tight font-extrabold text-balance uppercase sm:text-4xl lg:text-5xl">
            {t.skilledLabor.titleLine1}
            <br />
            {t.skilledLabor.titleLine2}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-white/90 sm:text-base">
            {t.skilledLabor.text}
          </p>
        </div>
      </div>
    </section>
  );
}
