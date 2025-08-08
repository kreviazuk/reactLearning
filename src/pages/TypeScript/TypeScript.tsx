import React, { useState, useMemo } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { Container, Grid, TypeScriptCard, TypeScriptFilter, TypeScriptDetail } from '../../components/common';
import { Breadcrumb } from '../../components/Navigation';
import { typescriptTopics } from '../../data/typescript';
import { TypeScriptTopic } from '../../types/typescript';

const TypeScriptList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 过滤和搜索逻辑
  const filteredTopics = useMemo(() => {
    return typescriptTopics.filter((topic: TypeScriptTopic) => {
      // 分类过滤
      const categoryMatch = selectedCategory === 'all' || topic.category === selectedCategory;
      
      // 难度过滤
      const difficultyMatch = selectedDifficulty === 'all' || topic.difficulty === selectedDifficulty;
      
      // 搜索过滤
      const searchMatch = searchQuery === '' || 
        topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      return categoryMatch && difficultyMatch && searchMatch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  // 统计信息
  const stats = useMemo(() => {
    const total = typescriptTopics.length;
    const filtered = filteredTopics.length;
    const categories = [...new Set(typescriptTopics.map(topic => topic.category))].length;
    
    return { total, filtered, categories };
  }, [filteredTopics]);

  return (
    <Container>
      <Breadcrumb className="mb-6" />
      
      {/* 页面标题和描述 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          TypeScript 在 React 中的应用
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          学习如何在 React 项目中有效使用 TypeScript，提升代码质量和开发体验。
          从基础类型定义到高级应用场景，掌握 TypeScript 的最佳实践。
        </p>
      </div>

      {/* 统计信息 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
          <div className="text-sm text-gray-600">总主题数</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{stats.categories}</div>
          <div className="text-sm text-gray-600">分类数量</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">{stats.filtered}</div>
          <div className="text-sm text-gray-600">当前显示</div>
        </div>
      </div>

      {/* 过滤器 */}
      <TypeScriptFilter
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onDifficultyChange={setSelectedDifficulty}
        onSearchChange={setSearchQuery}
      />

      {/* 主题列表 */}
      {filteredTopics.length > 0 ? (
        <Grid>
          {filteredTopics.map((topic) => (
            <TypeScriptCard key={topic.id} topic={topic} />
          ))}
        </Grid>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            没有找到匹配的主题
          </h3>
          <p className="text-gray-600 mb-4">
            尝试调整搜索条件或筛选器来查看更多内容
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedDifficulty('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            重置筛选条件
          </button>
        </div>
      )}
    </Container>
  );
};

const TypeScriptDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const topic = typescriptTopics.find(t => t.id === id);

  if (!topic) {
    return (
      <Container>
        <Breadcrumb className="mb-6" />
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">主题未找到</h1>
          <p className="text-gray-600 mb-6">您访问的主题不存在或已被移除</p>
          <a 
            href="/typescript" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            返回主题列表
          </a>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Breadcrumb className="mb-6" />
      <TypeScriptDetail topic={topic} />
    </Container>
  );
};

const TypeScript: React.FC = () => {
  return (
    <Routes>
      <Route index element={<TypeScriptList />} />
      <Route path=":id" element={<TypeScriptDetailPage />} />
    </Routes>
  );
};

export default TypeScript;