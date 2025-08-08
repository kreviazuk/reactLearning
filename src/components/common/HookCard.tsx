import React from 'react';
import { Link } from 'react-router-dom';
import { HookInfo } from '../../types/hooks';

interface HookCardProps {
  hook: HookInfo;
}

const categoryColors = {
  'built-in': 'bg-blue-100 text-blue-800',
  'custom': 'bg-purple-100 text-purple-800'
};

const categoryLabels = {
  'built-in': '内置 Hook',
  'custom': '自定义 Hook'
};

const typeColors = {
  state: 'bg-green-100 text-green-800',
  effect: 'bg-orange-100 text-orange-800',
  context: 'bg-indigo-100 text-indigo-800',
  performance: 'bg-red-100 text-red-800',
  utility: 'bg-gray-100 text-gray-800'
};

const typeLabels = {
  state: '状态管理',
  effect: '副作用',
  context: '上下文',
  performance: '性能优化',
  utility: '工具函数'
};

const HookCard: React.FC<HookCardProps> = ({ hook }) => {
  return (
    <Link 
      to={`/common-hooks/${hook.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200 hover:border-blue-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          {hook.name}
        </h3>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[hook.category]}`}>
            {categoryLabels[hook.category]}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColors[hook.type]}`}>
            {typeLabels[hook.type]}
          </span>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {hook.description}
      </p>
      
      <div className="mb-4">
        <div className="bg-gray-50 rounded-md p-3">
          <code className="text-sm text-gray-800 font-mono">
            {hook.syntax}
          </code>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex gap-4">
          <span>{hook.examples.length} 个示例</span>
          <span>{hook.commonPatterns.length} 个常见模式</span>
        </div>
        <span className="text-blue-600 hover:text-blue-800">查看详情 →</span>
      </div>
      
      {hook.relatedHooks.length > 0 && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">相关 Hooks: </span>
          <span className="text-xs text-gray-700">
            {hook.relatedHooks.slice(0, 3).join(', ')}
            {hook.relatedHooks.length > 3 && ` +${hook.relatedHooks.length - 3}`}
          </span>
        </div>
      )}
    </Link>
  );
};

export default HookCard;