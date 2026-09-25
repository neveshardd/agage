import Image from "next/image";
import Link from "next/link";
import { localizeHref } from "@/i18n/config";
import { getI18n } from "@/i18n/server";
import { BackToTop } from "./BackToTop";

export async function Footer() {
  const { locale, t } = await getI18n();

  return (
    <footer className="bg-brand-navy">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <Image
            src="/agage.png"
            alt="AGAGE"
            width={480}
            height={111}
            className="h-24 w-auto brightness-0 invert sm:h-28"
          />

          <div className="flex flex-col items-end gap-10 self-end text-right sm:flex-row sm:items-start sm:gap-20 lg:self-auto">
            <div>
              <h3 className="text-sm font-bold text-brand-orange">
                {t.footer.quickAccess}
              </h3>
              <ul className="mt-4 space-y-3 text-sm font-semibold text-white">
                <li>
                  <Link
                    href={localizeHref(locale, "/")}
                    className="transition-colors duration-150 hover:text-white/80 hover:underline"
                  >
                    {t.common.home}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizeHref(locale, "/#servicos")}
                    className="transition-colors duration-150 hover:text-white/80 hover:underline"
                  >
                    {t.common.services}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizeHref(locale, "/#contato")}
                    className="transition-colors duration-150 hover:text-white/80 hover:underline"
                  >
                    {t.footer.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-brand-orange">
                {t.footer.agage}
              </h3>
              <ul className="mt-4 space-y-3 text-sm font-semibold text-white">
                <li>
                  <Link
                    href={localizeHref(locale, "/#sobre")}
                    className="transition-colors duration-150 hover:text-white/80 hover:underline"
                  >
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizeHref(locale, "/missao-visao-e-valores")}
                    className="transition-colors duration-150 hover:text-white/80 hover:underline"
                  >
                    {t.footer.missionVisionValues}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizeHref(locale, "/#onde-atuamos")}
                    className="transition-colors duration-150 hover:text-white/80 hover:underline"
                  >
                    {t.footer.whereWeWork}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizeHref(locale, "/#certificacoes")}
                    className="transition-colors duration-150 hover:text-white/80 hover:underline"
                  >
                    {t.footer.certifications}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localizeHref(locale, "/#ouvidoria")}
                    className="transition-colors duration-150 hover:text-white/80 hover:underline"
                  >
                    {t.footer.ombudsman}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} {t.footer.rights} |{" "}
            <Link href="#" className="underline hover:text-white">
              {t.footer.privacy}
            </Link>
          </p>

          <p>
            {t.footer.developedBy}{" "}
            <a
              href="https://github.com/neveshardd"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline"
            >
              José Eugênio
            </a>
          </p>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
