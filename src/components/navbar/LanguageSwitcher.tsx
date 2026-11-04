"use client";

import { Combobox } from "@base-ui/react/combobox";
import { IconChevronDown } from "@tabler/icons-react";
import FlagBR from "country-flag-icons/react/3x2/BR";
import FlagCN from "country-flag-icons/react/3x2/CN";
import FlagES from "country-flag-icons/react/3x2/ES";
import FlagUS from "country-flag-icons/react/3x2/US";
import { usePathname, useRouter } from "next/navigation";
import {
  LANGUAGE_OPTIONS,
  type Locale,
  localizeHref,
  stripLocale,
} from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";

// Bandeira de cada idioma (SVG: emojis de bandeira não aparecem no Windows).
const FLAGS: Record<Locale, typeof FlagBR> = {
  pt: FlagBR,
  en: FlagUS,
  es: FlagES,
  zh: FlagCN,
};

const FLAG_CLASS =
  "h-3.5 w-[21px] shrink-0 overflow-hidden rounded-[3px] shadow-[0_0_0_1px_rgb(15_23_42/0.12)]";

export function LanguageSwitcher() {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const current = LANGUAGE_OPTIONS.find((option) => option.locale === locale);
  const CurrentFlag = FLAGS[locale];

  function handleChange(code: string | null) {
    const option = LANGUAGE_OPTIONS.find((item) => item.code === code);
    if (!option || option.locale === locale) return;

    // Mantém a página atual (e a seção, se houver âncora) ao trocar de idioma.
    const target = localizeHref(option.locale, stripLocale(pathname));
    router.push(`${target}${window.location.hash}`, { scroll: false });
  }

  return (
    <Combobox.Root
      items={LANGUAGE_OPTIONS.map((option) => option.code)}
      value={current?.code ?? null}
      onValueChange={handleChange}
    >
      <Combobox.InputGroup className="flex w-56 items-center gap-2 rounded-full border-2 border-black py-2 pr-3 pl-4">
        <CurrentFlag aria-hidden className={FLAG_CLASS} />
        <Combobox.Input
          placeholder={t.navbar.language}
          aria-label={t.navbar.language}
          className="min-w-0 flex-1 border-0 bg-transparent text-[15px] font-bold text-black outline-none placeholder:font-normal placeholder:text-slate-400"
        />
        <Combobox.Trigger
          aria-label={t.navbar.openLanguages}
          className="group flex shrink-0 cursor-pointer items-center justify-center"
        >
          <IconChevronDown
            aria-hidden
            stroke={3}
            className="h-4 w-4 text-black transition-transform duration-200 group-data-popup-open:rotate-180"
          />
        </Combobox.Trigger>
      </Combobox.InputGroup>

      <Combobox.Portal>
        <Combobox.Positioner
          className="z-50 outline-none"
          // Fixo: o popup nunca fica no fim do documento ao abrir, então destacar a opção atual não
          // rola a página (antes, abrir o seletor dava um salto para cima).
          positionMethod="fixed"
          align="end"
          sideOffset={8}
        >
          <Combobox.Popup className="w-(--anchor-width) rounded-md border border-slate-200 bg-white px-1.5 py-1 shadow-xl shadow-slate-900/10 outline-none transition-[opacity,translate] duration-200 ease-out data-ending-style:-translate-y-1 data-ending-style:opacity-0 data-starting-style:-translate-y-1 data-starting-style:opacity-0">
            <Combobox.List>
              {LANGUAGE_OPTIONS.map((option) => (
                <Combobox.Item
                  key={option.code}
                  value={option.code}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-[15px] whitespace-nowrap text-black outline-none data-highlighted:bg-slate-200"
                >
                  {(() => {
                    const Flag = FLAGS[option.locale];
                    return <Flag aria-hidden className={FLAG_CLASS} />;
                  })()}
                  {option.label}
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}
