import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CoreConcepts from '../pages/CoreConcepts';
import CommonHooks from '../pages/CommonHooks';
import TypeScript from '../pages/TypeScript';
import Interview from '../pages/Interview';
import AdvancedTricks from '../pages/AdvancedTricks';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/core-concepts/*" element={<CoreConcepts />} />
      <Route path="/common-hooks/*" element={<CommonHooks />} />
      <Route path="/typescript/*" element={<TypeScript />} />
      <Route path="/interview/*" element={<Interview />} />
      <Route path="/advanced-tricks/*" element={<AdvancedTricks />} />
      
      {/* 404 page - will be implemented later */}
      <Route path="*" element={
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">页面未找到</h1>
          <p className="text-gray-600">您访问的页面不存在</p>
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;