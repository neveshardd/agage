import { IconMail } from "@tabler/icons-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { getAlternates } from "@/i18n/seo";
import { getI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getI18n();
  return {
    title: t.privacy.title,
    description: t.privacy.metaDescription,
    alternates: getAlternates(locale, "/politica-de-privacidade"),
  };
}

const sectionId = (index: number) => `secao-${index + 1}`;

/** "Termo: explicação" → termo em destaque (definições, categorias de dados). */
function splitTerm(item: string) {
  const separator = item.indexOf(": ");
  if (separator <= 0 || separator > 40) return { term: null, text: item };
  return {
    term: item.slice(0, separator),
    text: item.slice(separator + 2),
  };
}

/**
 * Política de Privacidade em formato de documento técnico: seções e itens numerados (1, 1.1…),
 * hierarquia só por tipografia e espaço, sem divisores.
 */
export default async function PrivacyPolicyPage() {
  const { t, images } = await getI18n();
  const copy = t.privacy;

  return (
    <main className="flex flex-1 flex-col">
      <PageHeader
        title={copy.title}
        image={images["pages.privacy"]}
        breadcrumbs={[{ label: t.common.home, href: "/" }]}
      />

      <div className="mx-auto grid w-full max-w-screen-2xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[17rem_1fr] lg:gap-20 lg:px-10">
        <nav aria-label={copy.title} className="hidden lg:block">
          <ol className="sticky top-36 space-y-3 text-sm">
            {copy.sections.map((section, index) => (
              <li key={section.title}>
                <a
                  href={`#${sectionId(index)}`}
                  className="flex gap-3 text-slate-600 transition-colors duration-150 hover:text-brand-navy"
                >
                  <span className="w-5 shrink-0 text-right font-semibold text-slate-400 tabular-nums">
                    {index + 1}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="max-w-3xl">
          <p className="text-sm text-slate-500">
            {copy.updatedLabel}: {copy.updatedDate}
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
            {copy.intro}
          </p>

          <div className="mt-14 space-y-14">
            {copy.sections.map((section, index) => {
              const number = index + 1;
              return (
                <section
                  key={section.title}
                  id={sectionId(index)}
                  aria-labelledby={`${sectionId(index)}-titulo`}
                >
                  <h2
                    id={`${sectionId(index)}-titulo`}
                    className="flex gap-3 text-lg font-bold text-brand-navy sm:text-xl"
                  >
                    <span className="text-slate-400 tabular-nums">
                      {number}.
                    </span>
                    {section.title}
                  </h2>

                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.items.length > 0 ? (
                    <ol className="mt-5 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                      {section.items.map((item, itemIndex) => {
                        const { term, text } = splitTerm(item);
                        return (
                          <li key={item} className="flex gap-3">
                            <span className="w-8 shrink-0 font-semibold text-slate-400 tabular-nums">
                              {number}.{itemIndex + 1}
                            </span>
                            <span>
                              {term ? (
                                <strong className="font-semibold text-brand-navy">
                                  {term}:{" "}
                                </strong>
                              ) : null}
                              {text}
                            </span>
                          </li>
                        );
                      })}
                    </ol>
                  ) : null}
                </section>
              );
            })}
          </div>

          <aside className="mt-20 rounded-2xl bg-brand-navy p-8 text-white sm:p-10">
            <h2 className="text-lg font-bold sm:text-xl">
              {copy.contactTitle}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {copy.contactText}
            </p>
            <a
              href={`mailto:${copy.contactEmail}`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-bold tracking-wide text-white transition-colors duration-150 hover:bg-brand-orange-dark"
            >
              <IconMail aria-hidden className="h-4 w-4" />
              {copy.contactEmail}
            </a>
          </aside>
        </article>
      </div>
    </main>
  );
}
