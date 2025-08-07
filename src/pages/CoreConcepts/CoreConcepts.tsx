import React from 'react';
import { Container } from '../../components/common';
import { Breadcrumb } from '../../components/Navigation';

const CoreConcepts: React.FC = () => {
  return (
    <Container>
      <Breadcrumb className="mb-6" />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          React 核心概念
        </h1>
        <p className="text-lg text-gray-600">
          这个页面将在后续任务中实现具体内容
        </p>
      </div>
    </Container>
  );
};

export default CoreConcepts;