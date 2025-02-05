export interface NavItem {
  id: string;
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: JSX.Element;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
