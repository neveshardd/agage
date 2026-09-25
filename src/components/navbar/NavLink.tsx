import { NavigationMenu } from "@base-ui/react/navigation-menu";
import Link from "next/link";
import type { ReactNode } from "react";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <NavigationMenu.Link
      render={<Link href={href} />}
      className="-mx-3.5 inline-flex items-center rounded-md px-3.5 py-2.5 text-md font-bold text-black transition-colors duration-150 hover:bg-slate-200"
    >
      {children}
    </NavigationMenu.Link>
  );
}
