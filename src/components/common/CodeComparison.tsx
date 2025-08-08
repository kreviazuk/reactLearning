import React from 'react';
import CodeHighlight from './CodeHighlight';

interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  language: string;
  beforeTitle?: string;
  afterTitle?: string;
  beforeDescription?: string;
  afterDescription?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const CodeComparison: React.FC<CodeComparisonProps> = ({
  beforeCode,
  afterCode,
  language,
  beforeTitle = "之前",
  afterTitle = "之后",
  beforeDescription,
  afterDescription,
  showLineNumbers = false,
  className = ''
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 ${className}`}>
      {/* Before Code */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <h4 className="text-sm font-medium text-gray-700">{beforeTitle}</h4>
        </div>
        <CodeHighlight
          code={beforeCode}
          language={language}
          description={beforeDescription}
          showLineNumbers={showLineNumbers}
          showLanguageLabel={false}
          className="border-red-200"
        />
      </div>
      
      {/* After Code */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <h4 className="text-sm font-medium text-gray-700">{afterTitle}</h4>
        </div>
        <CodeHighlight
          code={afterCode}
          language={language}
          description={afterDescription}
          showLineNumbers={showLineNumbers}
          showLanguageLabel={false}
          className="border-green-200"
        />
      </div>
    </div>
  );
};

export default CodeComparison;