import React from 'react';

interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

const InlineCode: React.FC<InlineCodeProps> = ({ children, className = '' }) => {
  return (
    <code className={`bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono ${className}`}>
      {children}
    </code>
  );
};

export default InlineCode;