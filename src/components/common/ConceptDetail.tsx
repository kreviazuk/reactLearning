import React from 'react';
import { Link } from 'react-router-dom';
import { Concept } from '../../types/concept';
import CodeBlock from './CodeBlock';

interface ConceptDetailProps {
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

const ConceptDetail: React.FC<ConceptDetailProps> = ({ concept }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 sm:mb-0">
            {concept.title}
          </h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[concept.difficulty]} self-start`}>
            {difficultyLabels[concept.difficulty]}
          </span>
        </div>
        
        <p className="text-lg text-gray-600 mb-4">
          {concept.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {categoryLabels[concept.category]}
          </span>
          {concept.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">详细说明</h2>
        <div className="prose prose-lg max-w-none">
          {concept.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim() === '') return null;
            
            if (paragraph.startsWith('## ')) {
              return (
                <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  {paragraph.replace('## ', '')}
                </h3>
              );
            }
            
            if (paragraph.match(/^\d+\./)) {
              return (
                <p key={index} className="text-gray-700 mb-2 ml-4">
                  {paragraph}
                </p>
              );
            }
            
            return (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>

      {/* Code Examples */}
      {concept.codeExamples.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">代码示例</h2>
          <div className="space-y-6">
            {concept.codeExamples.map((example) => (
              <CodeBlock key={example.id} example={example} />
            ))}
          </div>
        </div>
      )}

      {/* Related Concepts */}
      {concept.relatedConcepts.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">相关概念</h2>
          <div className="flex flex-wrap gap-2">
            {concept.relatedConcepts.map(relatedId => (
              <Link
                key={relatedId}
                to={`/core-concepts/${relatedId}`}
                className="px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors text-sm font-medium"
              >
                {relatedId}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to List */}
      <div className="text-center">
        <Link
          to="/core-concepts"
          className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
        >
          ← 返回概念列表
        </Link>
      </div>
    </div>
  );
};

export default ConceptDetail;