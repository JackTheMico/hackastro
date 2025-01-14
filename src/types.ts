export interface MenuItem {
  id: string;
  svg: string;
  href?: string;
  target?: string;
  subItems?: SubItem[];
}

export interface SubItem {
  id: string;
  href: string;
  svg: string;
  target?: string;
}
