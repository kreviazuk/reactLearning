import React from 'react';
import { Link } from 'react-router-dom';
import { TypeScriptTopic } from '../../types/typescript';
import CodeComparison from './CodeComparison';

interface TypeScriptDetailProps {
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

const TypeScriptDetail: React.FC<TypeScriptDetailProps> = ({ topic }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 sm:mb-0">
            {topic.title}
          </h1>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[topic.difficulty]} self-start`}>
            {difficultyLabels[topic.difficulty]}
          </span>
        </div>
        
        <p className="text-lg text-gray-600 mb-4">
          {topic.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {categoryLabels[topic.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">详细说明</h2>
        <div className="prose prose-lg max-w-none">
          {topic.content.split('\n').map((paragraph, index) => {
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

      {/* Code Comparison */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">JavaScript vs TypeScript 对比</h2>
        <CodeComparison
          jsCode={topic.jsExample}
          tsCode={topic.tsExample}
          jsTitle="JavaScript 版本"
          tsTitle="TypeScript 版本"
          showBenefits={true}
          benefits={topic.benefits}
        />
      </div>

      {/* Benefits */}
      {topic.benefits.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">TypeScript 的优势</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Common Mistakes */}
      {topic.commonMistakes.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">常见错误</h2>
          <div className="space-y-3">
            {topic.commonMistakes.map((mistake, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{mistake}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Best Practices */}
      {topic.bestPractices.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">最佳实践</h2>
          <div className="space-y-3">
            {topic.bestPractices.map((practice, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700">{practice}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related Topics */}
      {topic.relatedTopics.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">相关主题</h2>
          <div className="flex flex-wrap gap-2">
            {topic.relatedTopics.map(relatedId => (
              <Link
                key={relatedId}
                to={`/typescript/${relatedId}`}
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
          to="/typescript"
          className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
        >
          ← 返回主题列表
        </Link>
      </div>
    </div>
  );
};

export default TypeScriptDetail;