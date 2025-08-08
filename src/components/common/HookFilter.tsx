import React from 'react';

interface HookFilterProps {
  selectedCategory: string;
  selectedType: string;
  onCategoryChange: (category: string) => void;
  onTypeChange: (type: string) => void;
}

const categoryOptions = [
  { value: 'all', label: '全部类别' },
  { value: 'built-in', label: '内置 Hook' },
  { value: 'custom', label: '自定义 Hook' }
];

const typeOptions = [
  { value: 'all', label: '全部用途' },
  { value: 'state', label: '状态管理' },
  { value: 'effect', label: '副作用' },
  { value: 'context', label: '上下文' },
  { value: 'performance', label: '性能优化' },
  { value: 'utility', label: '工具函数' }
];

const HookFilter: React.FC<HookFilterProps> = ({
  selectedCategory,
  selectedType,
  onCategoryChange,
  onTypeChange
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
            按类别筛选
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
          <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-2">
            按用途筛选
          </label>
          <select
            id="type-filter"
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {typeOptions.map(option => (
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

export default HookFilter;