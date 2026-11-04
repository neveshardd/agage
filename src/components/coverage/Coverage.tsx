import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { localizeHref } from "@/i18n/config";
import { getI18n } from "@/i18n/server";
import { BrazilMap } from "./BrazilMap";
import { COVERAGE_LOCATIONS } from "./data";
import { projectPoint } from "./projection";

// Projetado uma vez no servidor, para o navegador não precisar do d3.
const LOCATIONS = COVERAGE_LOCATIONS.map((location) => ({
  ...location,
  point: projectPoint(location.coordinates),
}));

export async function Coverage() {
  const { locale, t } = await getI18n();

  return (
    <section id="onde-atuamos" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-screen-2xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div data-reveal className="relative z-10">
          <h2 className="text-3xl font-bold text-balance text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {t.coverage.title}
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.coverage.paragraphs[0]}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {t.coverage.paragraphs[1]}
          </p>

          <Link
            href={localizeHref(locale, "/#obras")}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-brand-blue-dark"
          >
            {t.coverage.cta}
            <IconArrowRight
              aria-hidden
              stroke={2.25}
              className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/*
          O desenho do Brasil ocupa só x 302–781 e y 88–591 do viewBox 800×650 (o SVG tem margem
          vazia à esquerda). A coluna recebe a proporção do desenho e o mapa é deslocado para que o
          contorno do país preencha a coluna, encostando no texto como em "Quem somos".
        */}
        <div className="relative hidden aspect-[479/503] w-full max-w-140 justify-self-center lg:block">
          <div className="absolute top-[-17.5%] left-[-63.05%] h-[129.2%] w-[167%]">
            <BrazilMap locations={LOCATIONS} />
          </div>
        </div>
      </div>
    </section>
  );
}
