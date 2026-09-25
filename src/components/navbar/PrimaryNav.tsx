import { NavigationMenu } from "@base-ui/react/navigation-menu";
import type { RefObject } from "react";
import { NavItem } from "./NavItem";
import type { NavItemData } from "./types";

export function PrimaryNav({
  items,
  anchorRef,
}: {
  items: NavItemData[];
  anchorRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <NavigationMenu.Root className="hidden lg:block">
      <NavigationMenu.List className="flex items-center gap-8">
        {items.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Backdrop className="fixed inset-0 z-30 bg-slate-900/20" />
        <NavigationMenu.Positioner
          anchor={anchorRef}
          align="start"
          side="bottom"
          sideOffset={0}
          className="z-50 w-(--anchor-width) outline-none"
        >
          <NavigationMenu.Popup className="overflow-hidden rounded-b-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 outline-none">
            <NavigationMenu.Viewport />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}
