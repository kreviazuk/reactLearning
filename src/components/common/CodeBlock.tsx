import React, { useState } from 'react';
import { CodeExample } from '../../types/concept';

interface CodeBlockProps {
  example: CodeExample;
  showTitle?: boolean;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  example, 
  showTitle = true, 
  className = '' 
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(example.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const formatCode = (code: string) => {
    // 简单的代码格式化：处理缩进和换行
    return code
      .split('\n')
      .map(line => line.trimEnd())
      .join('\n')
      .trim();
  };

  const highlightSyntax = (code: string, language: string) => {
    // 简单的语法高亮实现
    const keywords = {
      javascript: ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'import', 'export', 'from', 'default'],
      jsx: ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'import', 'export', 'from', 'default', 'React'],
      typescript: ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return', 'import', 'export', 'from', 'default', 'interface', 'type', 'extends']
    };

    const langKeywords = keywords[language as keyof typeof keywords] || keywords.javascript;
    
    let highlightedCode = code;
    
    // 高亮关键字
    langKeywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlightedCode = highlightedCode.replace(regex, `<span class="text-blue-300 font-semibold">${keyword}</span>`);
    });
    
    // 高亮字符串
    highlightedCode = highlightedCode.replace(
      /(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g,
      '<span class="text-green-300">$1$2$1</span>'
    );
    
    // 高亮注释
    highlightedCode = highlightedCode.replace(
      /\/\/.*$/gm,
      '<span class="text-gray-400 italic">$&</span>'
    );
    
    // 高亮 JSX 标签
    if (language === 'jsx' || language === 'tsx') {
      highlightedCode = highlightedCode.replace(
        /<\/?[a-zA-Z][a-zA-Z0-9]*(?:\s[^>]*)?>/g,
        '<span class="text-red-300">$&</span>'
      );
    }
    
    return highlightedCode;
  };

  const formattedCode = formatCode(example.code);
  const highlightedCode = highlightSyntax(formattedCode, example.language);

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      {showTitle && (
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {example.title}
            </h3>
            {example.description && (
              <p className="text-sm text-gray-600 mt-1">
                {example.description}
              </p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-mono">
              {example.language}
            </span>
            {example.runnable && (
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                可运行
              </span>
            )}
          </div>
        </div>
      )}
      
      <div className="relative">
        <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm leading-relaxed m-0">
          <code 
            className="text-gray-100 bg-transparent"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
        
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          title="复制代码"
        >
          {copied ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
        
        {/* Copy Success Message */}
        {copied && (
          <div className="absolute top-2 right-14 bg-green-600 text-white px-2 py-1 rounded text-xs">
            已复制!
          </div>
        )}
      </div>
      
      {example.runnable && (
        <div className="bg-blue-50 px-4 py-2 border-t border-gray-200">
          <div className="flex items-center text-sm text-blue-700">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            这个示例可以在在线编辑器中运行和修改
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;