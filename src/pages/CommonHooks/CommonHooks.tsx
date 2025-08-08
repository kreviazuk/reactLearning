import React, { useState, useMemo } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { Container, Grid, HookCard, HookFilter, HookDetail } from '../../components/common';
import { Breadcrumb } from '../../components/Navigation';
import { hooks } from '../../data/hooks';
import { HookInfo } from '../../types/hooks';

// Hooks 列表组件
const HooksList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // 过滤 hooks 数据
  const filteredHooks = useMemo(() => {
    return hooks.filter((hook: HookInfo) => {
      const categoryMatch = selectedCategory === 'all' || hook.category === selectedCategory;
      const typeMatch = selectedType === 'all' || hook.type === selectedType;
      return categoryMatch && typeMatch;
    });
  }, [selectedCategory, selectedType]);

  // 按类别分组显示统计信息
  const stats = useMemo(() => {
    const builtInCount = hooks.filter(hook => hook.category === 'built-in').length;
    const customCount = hooks.filter(hook => hook.category === 'custom').length;
    return { builtInCount, customCount, total: hooks.length };
  }, []);

  return (
    <>
      {/* 页面标题和描述 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          常用 Hooks
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          学习和掌握 React Hooks，包括内置 Hooks 和自定义 Hooks 的使用方法
        </p>
        
        {/* 统计信息 */}
        <div className="flex justify-center gap-8 text-sm text-gray-500">
          <span>共 {stats.total} 个 Hooks</span>
          <span>内置 Hooks: {stats.builtInCount}</span>
          <span>自定义 Hooks: {stats.customCount}</span>
        </div>
      </div>

      {/* 过滤器 */}
      <HookFilter
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
      />

      {/* 结果统计 */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          找到 {filteredHooks.length} 个匹配的 Hooks
        </p>
      </div>

      {/* Hooks 列表 */}
      {filteredHooks.length > 0 ? (
        <Grid>
          {filteredHooks.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </Grid>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">没有找到匹配的 Hooks</h3>
          <p className="text-gray-500">
            尝试调整筛选条件或查看所有 Hooks
          </p>
        </div>
      )}
    </>
  );
};

// Hook 详情页面组件
const HookDetailPage: React.FC = () => {
  const { hookId } = useParams<{ hookId: string }>();
  
  const hook = useMemo(() => {
    return hooks.find(h => h.id === hookId);
  }, [hookId]);

  const customBreadcrumbs = useMemo(() => {
    if (!hook) return undefined;
    
    return [
      { title: '首页', path: '/' },
      { title: '常用 Hooks', path: '/common-hooks' },
      { title: hook.name, path: `/common-hooks/${hook.id}` }
    ];
  }, [hook]);

  if (!hook) {
    return (
      <>
        <Breadcrumb className="mb-6" />
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Hook 不存在</h3>
          <p className="text-gray-500">
            您访问的 Hook 不存在或已被移除
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb className="mb-6" customItems={customBreadcrumbs} />
      <HookDetail hook={hook} />
    </>
  );
};

// 主组件
const CommonHooks: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={
          <>
            <Breadcrumb className="mb-6" />
            <HooksList />
          </>
        } />
        <Route path="/:hookId" element={<HookDetailPage />} />
      </Routes>
    </Container>
  );
};

export default CommonHooks;