// 面试题相关的类型定义

import { CodeExample } from './concept';

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  tags: string[];
  codeExample?: CodeExample;
  followUpQuestions?: string[];
}