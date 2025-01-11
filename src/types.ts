export interface MenuItem {
  id?: string;
  text: string;
  svg: string;
  href?: string;
  target?: string;
  subItems?: MenuItem[];
}
