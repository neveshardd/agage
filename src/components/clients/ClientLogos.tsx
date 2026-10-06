import Image from "next/image";
import { getI18n } from "@/i18n/server";
import { CLIENT_LOGOS } from "./data";

// Tempo, em segundos, que cada logo leva para percorrer a própria largura.
const SECONDS_PER_LOGO = 5;

// Faixa contínua feita só com CSS: a lista é renderizada duas vezes e a faixa
// desliza metade da própria largura, voltando ao início sem salto. Roda no
// compositor do navegador, sem JavaScript.
export async function ClientLogos() {
  const { t } = await getI18n();

  return (
    <section className="border-y border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-center text-xs font-bold tracking-widest text-slate-500 uppercase">
          {t.clients.title}
        </p>

        <div className="client-marquee mt-8 sm:mt-10">
          <ul
            className="client-marquee-track"
            style={{
              animationDuration: `${CLIENT_LOGOS.length * SECONDS_PER_LOGO}s`,
            }}
          >
            {[false, true].flatMap((duplicate) =>
              CLIENT_LOGOS.map((logo) => (
                <li
                  key={`${duplicate}-${logo.src}`}
                  aria-hidden={duplicate || undefined}
                  className="client-marquee-item"
                >
                  <div className="relative h-10 w-full sm:h-12">
                    <Image
                      src={logo.src}
                      alt={duplicate ? "" : logo.alt}
                      fill
                      sizes="180px"
                      className="object-contain"
                    />
                  </div>
                </li>
              )),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
