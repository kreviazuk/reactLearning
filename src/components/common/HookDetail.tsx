import React from 'react';
import { Link } from 'react-router-dom';
import { HookInfo } from '../../types/hooks';
import CodeHighlight from './CodeHighlight';

interface HookDetailProps {
  hook: HookInfo;
}

const categoryColors = {
  'built-in': 'bg-blue-100 text-blue-800',
  custom: 'bg-purple-100 text-purple-800',
};

const categoryLabels = {
  'built-in': '内置 Hook',
  custom: '自定义 Hook',
};

const typeColors = {
  state: 'bg-green-100 text-green-800',
  effect: 'bg-orange-100 text-orange-800',
  context: 'bg-indigo-100 text-indigo-800',
  performance: 'bg-red-100 text-red-800',
  utility: 'bg-gray-100 text-gray-800',
};

const typeLabels = {
  state: '状态管理',
  effect: '副作用',
  context: '上下文',
  performance: '性能优化',
  utility: '工具函数',
};

const HookDetail: React.FC<HookDetailProps> = ({ hook }) => {
  return (
    <div>
      {/* 头部信息 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{hook.name}</h1>
          <div className="flex gap-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[hook.category]}`}
            >
              {categoryLabels[hook.category]}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors[hook.type]}`}
            >
              {typeLabels[hook.type]}
            </span>
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-6">{hook.description}</p>

        {/* 语法 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">语法</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <code className="text-lg font-mono text-gray-800">
              {hook.syntax}
            </code>
          </div>
        </div>

        {/* 参数 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">参数</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    参数名
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    类型
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    必需
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    描述
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {hook.parameters.map((param, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                      {param.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                      {param.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {param.optional ? (
                        <span className="text-gray-500">可选</span>
                      ) : (
                        <span className="text-red-600">必需</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {param.description}
                      {param.defaultValue && (
                        <div className="text-xs text-gray-500 mt-1">
                          默认值: <code>{param.defaultValue}</code>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 返回值 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">返回值</h2>
          <p className="text-gray-700">{hook.returnValue}</p>
        </div>
      </div>{' '}
      {/* 使用示例 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">使用示例</h2>
        <div className="space-y-6">
          {hook.examples.map((example, index) => (
            <div
              key={example.id}
              className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {index + 1}. {example.title}
              </h3>
              {example.description && (
                <p className="text-gray-600 mb-3">{example.description}</p>
              )}
              <CodeHighlight
                code={example.code}
                language={example.language}
                showLineNumbers={true}
                showCopyButton={true}
              />
              {example.runnable && (
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    可运行示例
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* 常见模式 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">常见模式</h2>
        <div className="space-y-3">
          {hook.commonPatterns.map((pattern, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <svg
                  className="w-3 h-3 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{pattern}</p>
            </div>
          ))}
        </div>
      </div>
      {/* 注意事项 */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">注意事项</h2>
        <div className="space-y-3">
          {hook.pitfalls.map((pitfall, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <svg
                  className="w-3 h-3 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700">{pitfall}</p>
            </div>
          ))}
        </div>
      </div>
      {/* 相关 Hooks */}
      {hook.relatedHooks.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            相关 Hooks
          </h2>
          <div className="flex flex-wrap gap-2">
            {hook.relatedHooks.map(relatedHook => (
              <Link
                key={relatedHook}
                to={`/common-hooks/${relatedHook.toLowerCase()}`}
                className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                {relatedHook}
                <svg
                  className="ml-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HookDetail;
