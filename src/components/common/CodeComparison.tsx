import React from 'react';
import CodeHighlight from './CodeHighlight';

interface CodeComparisonProps {
  beforeCode?: string;
  afterCode?: string;
  jsCode?: string;
  tsCode?: string;
  language?: string;
  beforeTitle?: string;
  afterTitle?: string;
  jsTitle?: string;
  tsTitle?: string;
  beforeDescription?: string;
  afterDescription?: string;
  showLineNumbers?: boolean;
  className?: string;
  showBenefits?: boolean;
  benefits?: string[];
}

const CodeComparison: React.FC<CodeComparisonProps> = ({
  beforeCode,
  afterCode,
  jsCode,
  tsCode,
  language = 'typescript',
  beforeTitle = "之前",
  afterTitle = "之后",
  jsTitle = "JavaScript",
  tsTitle = "TypeScript",
  beforeDescription,
  afterDescription,
  showLineNumbers = false,
  className = '',
  showBenefits = false,
  benefits = []
}) => {
  // Support both generic and TypeScript-specific interfaces
  const leftCode = beforeCode || jsCode || '';
  const rightCode = afterCode || tsCode || '';
  const leftTitle = beforeCode ? beforeTitle : jsTitle;
  const rightTitle = afterCode ? afterTitle : tsTitle;
  const leftLanguage = jsCode ? 'javascript' : language;
  const rightLanguage = tsCode ? 'typescript' : language;
  
  // Default benefits for TypeScript comparison
  const defaultTsBenefits = [
    '类型安全，编译时错误检查',
    '更好的 IDE 支持和自动补全',
    '代码自文档化，提高可维护性',
    '重构更安全，减少运行时错误'
  ];
  
  const displayBenefits = benefits.length > 0 ? benefits : (tsCode ? defaultTsBenefits : []);
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Code */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${jsCode ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
            <h4 className="text-sm font-medium text-gray-700">{leftTitle}</h4>
            {jsCode && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                缺乏类型安全
              </span>
            )}
          </div>
          <CodeHighlight
            code={leftCode}
            language={leftLanguage}
            description={beforeDescription}
            showLineNumbers={showLineNumbers}
            showLanguageLabel={true}
            className={jsCode ? "border-yellow-200" : "border-red-200"}
          />
        </div>
        
        {/* Right Code */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${tsCode ? 'bg-blue-500' : 'bg-green-500'}`}></div>
            <h4 className="text-sm font-medium text-gray-700">{rightTitle}</h4>
            {tsCode && (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                类型安全
              </span>
            )}
          </div>
          <CodeHighlight
            code={rightCode}
            language={rightLanguage}
            description={afterDescription}
            showLineNumbers={showLineNumbers}
            showLanguageLabel={true}
            className={tsCode ? "border-blue-200" : "border-green-200"}
          />
        </div>
      </div>
      
      {/* TypeScript Benefits */}
      {(showBenefits || (tsCode && displayBenefits.length > 0)) && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-blue-900">TypeScript 的优势</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {displayBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-blue-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeComparison;