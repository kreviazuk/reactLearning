import React, { useState, useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import '../../styles/code-highlight.css';
import { SyntaxHighlighter } from '../../utils/syntaxHighlighter';

interface CodeHighlightProps {
  code: string;
  language: string;
  title?: string;
  description?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  showCopyButton?: boolean;
  showLanguageLabel?: boolean;
  maxHeight?: string;
  className?: string;
}

const CodeHighlight: React.FC<CodeHighlightProps> = ({
  code,
  language,
  title,
  description,
  showLineNumbers = false,
  highlightLines = [],
  showCopyButton = true,
  showLanguageLabel = true,
  maxHeight,
  className = ''
}) => {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string>('');

  useEffect(() => {
    const highlighted = SyntaxHighlighter.highlight(code, {
      language,
      showLineNumbers,
      highlightLines
    });
    setHighlightedCode(highlighted);
  }, [code, language, showLineNumbers, highlightLines]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getLanguageDisplayName = (lang: string): string => {
    const displayNames: Record<string, string> = {
      'javascript': 'JavaScript',
      'js': 'JavaScript',
      'typescript': 'TypeScript',
      'ts': 'TypeScript',
      'jsx': 'JSX',
      'tsx': 'TSX',
      'css': 'CSS',
      'json': 'JSON',
      'html': 'HTML',
      'bash': 'Bash',
      'shell': 'Shell',
      'markdown': 'Markdown'
    };
    
    return displayNames[lang.toLowerCase()] || lang.toUpperCase();
  };

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      {(title || description || showLanguageLabel) && (
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex justify-between items-start">
          <div className="flex-1">
            {title && (
              <h4 className="text-base font-medium text-gray-900 mb-1">
                {title}
              </h4>
            )}
            {description && (
              <p className="text-sm text-gray-600">
                {description}
              </p>
            )}
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            {showLanguageLabel && (
              <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-mono">
                {getLanguageDisplayName(language)}
              </span>
            )}
            
            {!SyntaxHighlighter.isLanguageSupported(language) && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">
                语言不支持
              </span>
            )}
          </div>
        </div>
      )}
      
      {/* Code Block */}
      <div className="relative">
        <div 
          className={`bg-gray-900 text-gray-100 overflow-auto ${maxHeight ? '' : 'max-h-96'}`}
          style={maxHeight ? { maxHeight } : {}}
        >
          <pre className={`p-4 text-sm leading-relaxed m-0 ${showLineNumbers ? 'pl-12' : ''}`}>
            <code 
              className="text-gray-100 bg-transparent"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </div>
        
        {/* Copy Button */}
        {showCopyButton && (
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
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
        )}
        
        {/* Copy Success Message */}
        {copied && (
          <div className="absolute top-2 right-14 bg-green-600 text-white px-2 py-1 rounded text-xs z-10">
            已复制!
          </div>
        )}
        

      </div>
    </div>
  );
};

export default CodeHighlight;