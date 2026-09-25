import Link from "next/link";
import { localizeHref } from "@/i18n/config";
import { getI18n } from "@/i18n/server";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export async function PageHeader({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  const { locale, t } = await getI18n();

  return (
    <section className="bg-brand-navy py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav aria-label={t.common.breadcrumb} className="text-sm text-white/70">
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((item) => (
              <li key={item.href} className="flex items-center gap-2">
                <Link
                  href={localizeHref(locale, item.href)}
                  className="hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
                <span aria-hidden="true">/</span>
              </li>
            ))}
            <li aria-current="page" className="text-white">
              {title}
            </li>
          </ol>
        </nav>

        <div className="mt-8 flex items-center gap-4">
          <h1 className="text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
