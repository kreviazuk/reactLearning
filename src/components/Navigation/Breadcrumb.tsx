import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronRight, HiHome } from 'react-icons/hi';
import { navigationItems } from '../../data/navigation';
import { BreadcrumbItem } from '../../types/navigation';
import { cn } from '../../utils/cn';

interface BreadcrumbProps {
  className?: string;
  customItems?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className, customItems }) => {
  const location = useLocation();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ title: '首页', path: '/' }];

    let currentPath = '';
    
    for (const segment of pathSegments) {
      currentPath += `/${segment}`;
      
      // Find the navigation item that matches this path
      const findItemByPath = (items: typeof navigationItems, path: string): any => {
        for (const item of items) {
          if (item.path === path) return item;
          if (item.children) {
            const found = findItemByPath(item.children, path);
            if (found) return found;
          }
        }
        return null;
      };

      const item = findItemByPath(navigationItems, currentPath);
      if (item) {
        breadcrumbs.push({
          title: item.title,
          path: currentPath
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className={cn('flex items-center space-x-2 text-sm text-gray-500', className)}>
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item.path || index}>
          {index > 0 && (
            <HiChevronRight className="h-4 w-4 text-gray-400" />
          )}
          
          {index === 0 ? (
            <Link
              to={item.path || '/'}
              className="flex items-center hover:text-gray-700 transition-colors duration-200"
            >
              <HiHome className="h-4 w-4" />
            </Link>
          ) : index === breadcrumbs.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.title}</span>
          ) : (
            <Link
              to={item.path || '#'}
              className="hover:text-gray-700 transition-colors duration-200"
            >
              {item.title}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;