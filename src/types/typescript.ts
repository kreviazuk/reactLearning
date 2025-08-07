// TypeScript 应用相关的类型定义

export interface TypeScriptTopic {
  id: string;
  title: string;
  description: string;
  category: 'basics' | 'components' | 'hooks' | 'patterns' | 'advanced';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  jsExample: string;
  tsExample: string;
  benefits: string[];
  commonMistakes: string[];
  bestPractices: string[];
  relatedTopics: string[];
}