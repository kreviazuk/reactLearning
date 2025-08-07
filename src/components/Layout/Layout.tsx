import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Navigation } from '../Navigation';

export interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {showSidebar && (
                <button
                  onClick={toggleSidebar}
                  className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Toggle sidebar"
                >
                  {isSidebarOpen ? (
                    <HiX className="h-6 w-6" />
                  ) : (
                    <HiMenu className="h-6 w-6" />
                  )}
                </button>
              )}
              <h1 className="ml-2 lg:ml-0 text-xl sm:text-2xl font-bold text-gray-900">
                React 学习平台
              </h1>
            </div>
            
            {/* Header actions - placeholder for future features */}
            <div className="flex items-center space-x-4">
              {/* Search will be added later */}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {showSidebar && (
          <>
            {/* Mobile sidebar overlay */}
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 lg:hidden"
                  onClick={toggleSidebar}
                />
              )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
              initial={false}
              animate={{
                x: isSidebarOpen ? 0 : '-100%',
              }}
              className="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform lg:translate-x-0 lg:static lg:inset-0 lg:z-0"
            >
              <div className="flex flex-col h-full pt-16 lg:pt-0">
                {/* Sidebar content will be added in navigation component */}
                <div className="flex-1 flex flex-col min-h-0 bg-white">
                  <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4 lg:hidden">
                      <h2 className="text-lg font-semibold text-gray-900">导航</h2>
                    </div>
                    <div className="mt-5 flex-1 px-2">
                      <Navigation />
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Desktop sidebar spacer */}
            <div className="hidden lg:block lg:w-64 lg:flex-shrink-0" />
          </>
        )}

        {/* Main content */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;