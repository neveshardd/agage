"use client";

import { Combobox } from "@base-ui/react/combobox";
import { usePathname, useRouter } from "next/navigation";
import { LANGUAGE_OPTIONS, localizeHref, stripLocale } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { GlobeIcon } from "./icons/GlobeIcon";

export function LanguageSwitcher() {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();

  const current = LANGUAGE_OPTIONS.find((option) => option.locale === locale);

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
      <Combobox.InputGroup className="flex items-center gap-1.5 rounded-full border-2 border-black py-2 pl-3 pr-2">
        <GlobeIcon className="h-4 w-4 shrink-0 text-black" />
        <Combobox.Input
          placeholder={t.navbar.language}
          aria-label={t.navbar.language}
          className="w-16 border-0 bg-transparent text-[15px] font-bold text-black outline-none placeholder:font-normal placeholder:text-slate-400"
        />
        <Combobox.Trigger
          aria-label={t.navbar.openLanguages}
          className="group flex shrink-0 cursor-pointer items-center justify-center"
        >
          <ChevronDownIcon
            strokeWidth={3}
            className="h-2.5 w-2.5 text-black transition-transform duration-200 group-data-popup-open:rotate-180"
          />
        </Combobox.Trigger>
      </Combobox.InputGroup>

      <Combobox.Portal>
        <Combobox.Positioner
          className="z-50 outline-none"
          align="end"
          sideOffset={8}
        >
          <Combobox.Popup className="rounded-md w-45 border border-slate-200 bg-white px-1.5 py-1 shadow-xl shadow-slate-900/10 outline-none">
            <Combobox.List>
              {LANGUAGE_OPTIONS.map((option) => (
                <Combobox.Item
                  key={option.code}
                  value={option.code}
                  className="cursor-pointer rounded-md px-4 py-2.5 text-[15px] text-black outline-none data-highlighted:bg-slate-200"
                >
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
