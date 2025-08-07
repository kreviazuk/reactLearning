// 概念相关的类型定义

export interface CodeExample {
  id: string;
  title: string;
  code: string;
  language: string;
  description?: string;
  runnable?: boolean;
}

export interface Concept {
  id: string;
  title: string;
  description: string;
  category: 'basics' | 'hooks' | 'performance' | 'patterns';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  codeExamples: CodeExample[];
  relatedConcepts: string[];
  tags: string[];
}