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

export interface CardInfo {
  title: string;
  image?: string;
  pubDate?: Date;
  badge?: string;
  category: string;
  tags?: string[];
  word?: string;
  time?: string;
  isBlog: boolean;
  comment?: boolean;
  url?: string;
}
