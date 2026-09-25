export interface MegaMenuLinkData {
  label: string;
  href: string;
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
