import React from 'react';

interface TypeScriptFilterProps {
  selectedCategory: string;
  selectedDifficulty: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
  onSearchChange: (query: string) => void;
}

const categoryOptions = [
  { value: 'all', label: '全部分类' },
  { value: 'basics', label: '基础概念' },
  { value: 'components', label: '组件类型' },
  { value: 'hooks', label: 'Hooks 类型' },
  { value: 'patterns', label: '设计模式' },
  { value: 'advanced', label: '高级应用' }
];

const difficultyOptions = [
  { value: 'all', label: '全部难度' },
  { value: 'beginner', label: '初级' },
  { value: 'intermediate', label: '中级' },
  { value: 'advanced', label: '高级' }
];

const TypeScriptFilter: React.FC<TypeScriptFilterProps> = ({
  selectedCategory,
  selectedDifficulty,
  searchQuery,
  onCategoryChange,
  onDifficultyChange,
  onSearchChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-col gap-4">
        {/* 搜索框 */}
        <div>
          <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-2">
            搜索主题
          </label>
          <input
            id="search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="输入关键词搜索..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {/* 筛选器 */}
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
    </div>
  );
};

export default TypeScriptFilter;