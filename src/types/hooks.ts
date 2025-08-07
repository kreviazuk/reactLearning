// Hooks 相关的类型定义

import { CodeExample } from './concept';

export interface Parameter {
  name: string;
  type: string;
  description: string;
  optional?: boolean;
  defaultValue?: string;
}

export interface HookInfo {
  id: string;
  name: string;
  description: string;
  category: 'built-in' | 'custom';
  type: 'state' | 'effect' | 'context' | 'performance' | 'utility';
  syntax: string;
  parameters: Parameter[];
  returnValue: string;
  examples: CodeExample[];
  commonPatterns: string[];
  pitfalls: string[];
  relatedHooks: string[];
}