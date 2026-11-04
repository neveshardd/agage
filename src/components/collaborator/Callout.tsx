import type { TablerIcon } from "@tabler/icons-react";

/** Destaque de fechamento das páginas do colaborador: fundo cinza visível e ícone laranja. */
export function Callout({
  icon: Icon,
  text,
}: {
  icon: TablerIcon;
  text: string;
}) {
  return (
    <section className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10">
      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-100 p-6 sm:items-center sm:gap-5 sm:p-8">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
          <Icon aria-hidden stroke={1.8} className="h-6 w-6" />
        </span>
        <p className="text-base leading-relaxed font-medium text-brand-navy sm:text-lg">
          {text}
        </p>
      </div>
    </section>
  );
}
