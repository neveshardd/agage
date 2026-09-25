import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { MegaMenu } from "./MegaMenu";
import { NavLink } from "./NavLink";
import type { NavItemData } from "./types";

export function NavItem({ item }: { item: NavItemData }) {
  if (!item.megaMenu) {
    return (
      <NavigationMenu.Item>
        <NavLink href={item.href}>{item.label}</NavLink>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger className="group -mx-3.5 flex cursor-pointer items-center gap-1.5 rounded-md px-3.5 py-2.5 text-md font-bold text-black transition-colors duration-150 hover:bg-slate-200 data-popup-open:bg-slate-200">
        {item.label}
        <NavigationMenu.Icon className="transition-transform duration-200 data-popup-open:rotate-180">
          <ChevronDownIcon className="h-2.5 w-2.5" />
        </NavigationMenu.Icon>
      </NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <MegaMenu content={item.megaMenu} />
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}
