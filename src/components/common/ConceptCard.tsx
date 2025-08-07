import React from 'react';
import { Link } from 'react-router-dom';
import { Concept } from '../../types/concept';

interface ConceptCardProps {
  concept: Concept;
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
  hooks: 'Hooks',
  performance: '性能优化',
  patterns: '设计模式'
};

const ConceptCard: React.FC<ConceptCardProps> = ({ concept }) => {
  return (
    <Link 
      to={`/core-concepts/${concept.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 border border-gray-200 hover:border-blue-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          {concept.title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[concept.difficulty]}`}>
          {difficultyLabels[concept.difficulty]}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {concept.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
          {categoryLabels[concept.category]}
        </span>
        {concept.tags.slice(0, 3).map(tag => (
          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
            {tag}
          </span>
        ))}
        {concept.tags.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
            +{concept.tags.length - 3}
          </span>
        )}
      </div>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{concept.codeExamples.length} 个代码示例</span>
        <span className="text-blue-600 hover:text-blue-800">查看详情 →</span>
      </div>
    </Link>
  );
};

export default ConceptCard;