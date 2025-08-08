import React from 'react';
import { Link } from 'react-router-dom';
import { TypeScriptTopic } from '../../types/typescript';

interface TypeScriptCardProps {
  topic: TypeScriptTopic;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
};

const difficultyLabels = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级'
};

const categoryLabels = {
  basics: '基础概念',
  components: '组件类型',
  hooks: 'Hooks 类型',
  patterns: '设计模式',
  advanced: '高级应用'
};

const TypeScriptCard: React.FC<TypeScriptCardProps> = ({ topic }) => {
  return (
    <Link 
      to={`/typescript/${topic.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200 hover:border-blue-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          {topic.title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[topic.difficulty]}`}>
          {difficultyLabels[topic.difficulty]}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {topic.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
          {categoryLabels[topic.category]}
        </span>
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex gap-4">
          <span>{topic.benefits.length} 个优势</span>
          <span>{topic.bestPractices.length} 个最佳实践</span>
        </div>
        <span className="text-blue-600 hover:text-blue-800">查看详情 →</span>
      </div>
    </Link>
  );
};

export default TypeScriptCard;