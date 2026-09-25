import { Dialog } from "@base-ui/react/dialog";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { Logo } from "../Logo";
import type { NavItemData } from "../types";

export function MobileMenuDrilldownScreen({
  item,
  onBack,
}: {
  item: NavItemData;
  onBack: () => void;
}) {
  const { t } = useI18n();

  return (
    <>
      <div className="grid h-20 shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-slate-200 px-6">
        <button
          type="button"
          onClick={onBack}
          className="flex cursor-pointer items-center gap-1.5 text-[15px] font-bold text-black underline underline-offset-4"
        >
          <ChevronRightIcon className="h-3 w-3 rotate-180" />
          {t.common.back}
        </button>
        <Logo />
        <Dialog.Close
          aria-label={t.navbar.closeMenu}
          className="flex cursor-pointer items-center justify-end text-black"
        >
          <CloseIcon className="h-4 w-4" />
        </Dialog.Close>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {item.megaMenu?.columns.map((column) =>
          column.sections.map((section) => (
            <div
              key={section.heading}
              className="border-b border-slate-200 py-4 last:border-0"
            >
              <h3 className="mb-1 text-xs font-bold tracking-wide text-slate-500 uppercase">
                {section.heading}
              </h3>
              {section.links.map((link) => (
                <Dialog.Close
                  key={link.label}
                  nativeButton={false}
                  render={<Link href={link.href} />}
                  className="-mx-3 flex items-center justify-between gap-2 rounded-md px-3 py-3 text-[15px] font-bold text-black hover:bg-slate-200"
                >
                  {link.label}
                  <ChevronRightIcon className="h-3 w-3 shrink-0 text-black" />
                </Dialog.Close>
              ))}
            </div>
          )),
        )}
      </div>
    </>
  );
}
