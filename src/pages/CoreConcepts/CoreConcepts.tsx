import React, { useState, useMemo } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { Container, ConceptCard, ConceptFilter, ConceptDetail } from '../../components/common';
import { Breadcrumb } from '../../components/Navigation';
import concepts from '../../data/concepts';
import { Concept } from '../../types/concept';

const ConceptList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const filteredConcepts = useMemo(() => {
    return concepts.filter(concept => {
      const categoryMatch = selectedCategory === 'all' || concept.category === selectedCategory;
      const difficultyMatch = selectedDifficulty === 'all' || concept.difficulty === selectedDifficulty;
      return categoryMatch && difficultyMatch;
    });
  }, [selectedCategory, selectedDifficulty]);

  return (
    <Container>
      <Breadcrumb className="mb-6" />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          React 核心概念
        </h1>
        <p className="text-lg text-gray-600">
          深入学习 React 的核心概念，从基础语法到高级模式
        </p>
      </div>

      <ConceptFilter
        selectedCategory={selectedCategory}
        selectedDifficulty={selectedDifficulty}
        onCategoryChange={setSelectedCategory}
        onDifficultyChange={setSelectedDifficulty}
      />

      <div className="mb-4 text-sm text-gray-600">
        显示 {filteredConcepts.length} 个概念
      </div>

      {filteredConcepts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">没有找到匹配的概念</h3>
          <p className="text-gray-600">请尝试调整筛选条件</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConcepts.map(concept => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      )}
    </Container>
  );
};

const ConceptDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const concept = concepts.find(c => c.id === id);

  if (!concept) {
    return (
      <Container>
        <Breadcrumb className="mb-6" />
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">概念未找到</h1>
          <p className="text-gray-600 mb-6">您访问的概念不存在或已被移除</p>
          <a 
            href="/core-concepts" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            返回概念列表
          </a>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Breadcrumb className="mb-6" />
      <ConceptDetail concept={concept} />
    </Container>
  );
};

const CoreConcepts: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ConceptList />} />
      <Route path=":id" element={<ConceptDetailPage />} />
    </Routes>
  );
};

export default CoreConcepts;