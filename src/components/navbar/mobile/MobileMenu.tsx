"use client";

import { Dialog } from "@base-ui/react/dialog";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { MenuIcon } from "../icons/MenuIcon";
import type { NavItemData } from "../types";
import { MobileMenuDrilldownScreen } from "./MobileMenuDrilldownScreen";
import { MobileMenuRootScreen } from "./MobileMenuRootScreen";

export function MobileMenu({
  items,
  className,
}: {
  items: NavItemData[];
  className?: string;
}) {
  const { t } = useI18n();
  const [drilldown, setDrilldown] = useState<NavItemData | null>(null);

  return (
    <Dialog.Root
      onOpenChange={(open) => {
        if (!open) setDrilldown(null);
      }}
    >
      <Dialog.Trigger
        aria-label={t.navbar.openMenu}
        className={`flex cursor-pointer items-center justify-center text-black ${className ?? ""}`}
      >
        <MenuIcon className="h-4 w-5" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-40 bg-slate-900/20" />
        <Dialog.Popup className="fixed inset-0 z-50 flex flex-col bg-white outline-none">
          {drilldown ? (
            <MobileMenuDrilldownScreen
              item={drilldown}
              onBack={() => setDrilldown(null)}
            />
          ) : (
            <MobileMenuRootScreen items={items} onDrilldown={setDrilldown} />
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
