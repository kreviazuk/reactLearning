import React from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { Container, Grid } from '../../components/common';

const Home: React.FC = () => {
  const mainSections = navigationItems.filter(item => item.id !== 'home');

  return (
    <Container>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          欢迎来到 React 学习平台
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          系统学习 React 核心概念、常用 Hooks、TypeScript 应用、面试重点和高级技巧
        </p>
      </div>

      <Grid cols={{ default: 1, md: 2, lg: 3 }} gap={6}>
        {mainSections.map((section) => (
          <Link
            key={section.id}
            to={section.path}
            className="block p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-primary-300 transition-all duration-200"
          >
            <div className="flex items-center mb-4">
              {section.icon && (
                <section.icon className="h-8 w-8 text-primary-500 mr-3" />
              )}
              <h2 className="text-xl font-semibold text-gray-900">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              {section.description}
            </p>
            {section.children && (
              <div className="text-sm text-gray-500">
                包含 {section.children.length} 个子主题
              </div>
            )}
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;