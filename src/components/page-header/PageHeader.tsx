import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { localizeHref } from "@/i18n/config";
import { getI18n } from "@/i18n/server";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

/**
 * Cabeçalho das páginas internas: bloco azul-marinho recuado e arredondado, no mesmo formato da
 * hero da página inicial, com foto opcional ao fundo.
 */
export async function PageHeader({
  title,
  breadcrumbs,
  image,
}: {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  /** Foto de fundo (slot de imagem editável). */
  image?: string;
}) {
  const { locale, t } = await getI18n();

  return (
    <section className="mx-auto w-full max-w-screen-2xl px-4 pt-4 sm:px-6 sm:pt-5 lg:px-10 lg:pt-6">
      <div className="relative isolate overflow-hidden rounded-xl bg-brand-navy px-6 py-12 text-white sm:rounded-2xl sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        {image ? (
          <>
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="(min-width: 1536px) 1456px, 100vw"
              className="-z-10 object-cover"
            />
            <span
              aria-hidden
              className="absolute inset-0 -z-10 bg-linear-to-r from-brand-navy via-brand-navy/90 to-brand-navy/45"
            />
          </>
        ) : null}

        <nav aria-label={t.common.breadcrumb} className="text-sm text-white/70">
          <ol className="flex flex-wrap items-center gap-1.5">
            {breadcrumbs.map((item) => (
              <li key={item.href} className="flex items-center gap-1.5">
                <Link
                  href={localizeHref(locale, item.href)}
                  className="rounded-sm transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item.label}
                </Link>
                <IconChevronRight
                  aria-hidden
                  className="h-3.5 w-3.5 text-white/50"
                />
              </li>
            ))}
            <li aria-current="page" className="font-semibold text-white">
              {title}
            </li>
          </ol>
        </nav>

        <h1 className="mt-6 max-w-3xl text-3xl font-bold text-balance sm:mt-8 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
