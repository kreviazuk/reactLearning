export interface NavigationItem {
  id: string;
  title: string;
  path: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
  description?: string;
}

export interface BreadcrumbItem {
  title: string;
  path?: string;
}