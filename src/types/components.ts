// 组件 Props 接口定义

import { ReactNode } from 'react';

// Layout 组件
export interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

// CodeEditor 组件
export interface CodeEditorProps {
  code: string;
  language: string;
  onChange?: (code: string) => void;
  readOnly?: boolean;
  showPreview?: boolean;
}

// ConceptCard 组件
export interface ConceptCardProps {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  codeExample?: string;
  relatedConcepts?: string[];
  onClick?: () => void;
}

// InterviewQuestion 组件
export interface InterviewQuestionProps {
  question: string;
  answer: string;
  codeExample?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  isBookmarked?: boolean;
  onBookmark?: () => void;
}

// SearchBar 组件
export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  suggestions?: string[];
}

// Navigation 组件
export interface NavigationProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

// Breadcrumb 组件
export interface BreadcrumbProps {
  items: Array<{
    label: string;
    path: string;
  }>;
}

// 通用卡片组件
export interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

// 过滤器组件
export interface FilterProps {
  categories: string[];
  difficulties: string[];
  selectedCategory?: string;
  selectedDifficulty?: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

// 标签组件
export interface TagProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

// 代码对比组件
export interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  beforeTitle?: string;
  afterTitle?: string;
  language: string;
}