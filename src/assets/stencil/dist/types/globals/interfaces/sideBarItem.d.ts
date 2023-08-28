export interface SideBarItem {
  title: string;
  selected?: boolean;
  expanded?: boolean;
  icon?: string;
  link?: string;
  pathMatch?: 'prefix' | 'full';
  children?: Array<SideBarItem>;
}
