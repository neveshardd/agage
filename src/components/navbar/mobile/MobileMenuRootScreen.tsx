import { Dialog } from "@base-ui/react/dialog";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { CloseIcon } from "../icons/CloseIcon";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Logo } from "../Logo";
import type { NavItemData } from "../types";

export function MobileMenuRootScreen({
  items,
  onDrilldown,
}: {
  items: NavItemData[];
  onDrilldown: (item: NavItemData) => void;
}) {
  const { t } = useI18n();

  return (
    <>
      <div className="flex h-20 shrink-0 items-center justify-between border-b border-slate-200 px-6">
        <Logo />
        <Dialog.Close
          aria-label={t.navbar.closeMenu}
          className="flex cursor-pointer items-center justify-center text-black"
        >
          <CloseIcon className="h-4 w-4" />
        </Dialog.Close>
      </div>

      <nav
        aria-label={t.navbar.mainNav}
        className="flex flex-1 flex-col overflow-y-auto px-6 py-2"
      >
        {items.map((item) =>
          item.megaMenu ? (
            <button
              key={item.label}
              type="button"
              onClick={() => onDrilldown(item)}
              className="-mx-3 flex cursor-pointer items-center justify-between border-b border-slate-200 px-3 py-4 text-[15px] font-bold text-black hover:bg-slate-200"
            >
              {item.label}
              <ChevronRightIcon className="h-3 w-3 shrink-0 text-black" />
            </button>
          ) : (
            <Dialog.Close
              key={item.label}
              nativeButton={false}
              render={<Link href={item.href} />}
              className="-mx-3 flex items-center justify-between border-b border-slate-200 px-3 py-4 text-[15px] font-bold text-black hover:bg-slate-200"
            >
              {item.label}
            </Dialog.Close>
          ),
        )}
      </nav>

      <div className="shrink-0 border-t border-slate-200 px-6 py-4">
        <LanguageSwitcher />
      </div>
    </>
  );
}
