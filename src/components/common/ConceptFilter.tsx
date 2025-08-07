import React from 'react';
import { Concept } from '../../types/concept';

interface ConceptFilterProps {
  selectedCategory: string;
  selectedDifficulty: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

const categoryOptions = [
  { value: 'all', label: '全部分类' },
  { value: 'basics', label: '基础概念' },
  { value: 'hooks', label: 'Hooks' },
  { value: 'performance', label: '性能优化' },
  { value: 'patterns', label: '设计模式' }
];

const difficultyOptions = [
  { value: 'all', label: '全部难度' },
  { value: 'beginner', label: '初级' },
  { value: 'intermediate', label: '中级' },
  { value: 'advanced', label: '高级' }
];

const ConceptFilter: React.FC<ConceptFilterProps> = ({
  selectedCategory,
  selectedDifficulty,
  onCategoryChange,
  onDifficultyChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
            按分类筛选
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categoryOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex-1">
          <label htmlFor="difficulty-filter" className="block text-sm font-medium text-gray-700 mb-2">
            按难度筛选
          </label>
          <select
            id="difficulty-filter"
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {difficultyOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ConceptFilter;