interface ContentSection {
  title: string;
  text: string;
  items: string[];
}

/**
 * Blocos de copy (texto + lista opcional) em cards. Layout em colunas (alvenaria): cada card tem a
 * altura do próprio texto, sem sobrar espaço vazio ao lado de um card mais longo.
 */
export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl columns-1 gap-5 px-6 sm:columns-2 lg:columns-3 lg:gap-6 lg:px-10">
      {sections.map((section) => (
        <article
          key={section.title}
          data-reveal
          className="mb-5 break-inside-avoid rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 lg:mb-6"
        >
          <h2 className="text-lg leading-snug font-bold text-brand-navy">
            {section.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {section.text}
          </p>
          {section.items.length > 0 ? (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 marker:text-brand-orange sm:text-base">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
