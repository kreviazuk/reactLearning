import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import { navigationItems } from '../../data/navigation';
import { NavigationItem } from '../../types/navigation';
import { cn } from '../../utils/cn';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const isExpanded = (itemId: string) => {
    return expandedItems.includes(itemId) || 
           navigationItems.find(item => item.id === itemId)?.children?.some(child => isActive(child.path));
  };

  const renderNavigationItem = (item: NavigationItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const expanded = isExpanded(item.id);
    const active = isActive(item.path);

    return (
      <div key={item.id} className="space-y-1">
        <div className="flex items-center">
          <Link
            to={item.path}
            className={cn(
              'flex-1 flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200',
              level === 0 ? 'pl-2' : 'pl-8',
              active
                ? 'bg-primary-100 text-primary-900 border-r-2 border-primary-500'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            )}
          >
            {item.icon && level === 0 && (
              <item.icon className={cn(
                'mr-3 h-5 w-5 flex-shrink-0',
                active ? 'text-primary-500' : 'text-gray-400'
              )} />
            )}
            <span className="flex-1">{item.title}</span>
          </Link>
          
          {hasChildren && (
            <button
              onClick={() => toggleExpanded(item.id)}
              className={cn(
                'p-1 rounded-md transition-colors duration-200',
                active ? 'text-primary-500' : 'text-gray-400 hover:text-gray-600'
              )}
              aria-label={expanded ? '收起子菜单' : '展开子菜单'}
            >
              {expanded ? (
                <HiChevronDown className="h-4 w-4" />
              ) : (
                <HiChevronRight className="h-4 w-4" />
              )}
            </button>
          )}
        </div>

        <AnimatePresence>
          {hasChildren && expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-1">
                {item.children?.map(child => renderNavigationItem(child, level + 1))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <nav className={cn('space-y-1', className)}>
      {navigationItems.map(item => renderNavigationItem(item))}
    </nav>
  );
};

export default Navigation;