export interface Blog {
  data: {
    title: string;
    image: string;
    description: string;
    pubDate: Date;
    badge: string;
    category: string;
    tags: string[];
  };
  remarkPluginFrontmatter: {
    totalCharCount: string;
    readingTime: string;
  };
  lang?: string;
  slug: string;
}

export interface Page {
  url: {
    prev?: string;
    next?: string;
  };
  data: Blog[];
  total: number;
  size: number;
  current: number;
}

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

export interface EnvelopeInfo {
  title: string;
  desc: string;
  image?: string;
  pubDate?: Date;
  badge?: string;
  category: string;
  tags?: string[];
  word?: string;
  time?: string;
  isBlog: boolean;
  url: string;
}
