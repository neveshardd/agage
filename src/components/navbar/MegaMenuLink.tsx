import { NavigationMenu } from "@base-ui/react/navigation-menu";
import Link from "next/link";
import type { MegaMenuLinkData } from "./types";

export function MegaMenuLink({
  link,
  onActivate,
}: {
  link: MegaMenuLinkData;
  onActivate: (image: string) => void;
}) {
  const activate = () => onActivate(link.image);

  return (
    <NavigationMenu.Link
      render={<Link href={link.href} />}
      closeOnClick
      onMouseEnter={activate}
      onFocus={activate}
      className="-mx-2.5 flex items-center rounded-md px-2.5 py-2 text-[15px] leading-snug text-black transition-colors duration-150 hover:bg-slate-200"
    >
      {link.label}
    </NavigationMenu.Link>
  );
}
