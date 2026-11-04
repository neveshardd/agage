export interface MegaMenuLinkData {
  label: string;
  href: string;
  /** Foto quadrada exibida à direita do mega menu quando o link está em foco. */
  image: string;
}

export interface MegaMenuSectionData {
  heading: string;
  links: MegaMenuLinkData[];
}

export interface MegaMenuColumnData {
  sections: MegaMenuSectionData[];
}

export interface MegaMenuContent {
  columns: MegaMenuColumnData[];
}

export interface NavItemData {
  label: string;
  href: string;
  megaMenu?: MegaMenuContent;
}
