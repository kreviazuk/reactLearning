// 通用类型定义

// 难度等级
export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'easy' | 'medium' | 'hard';

// 编程语言
export type ProgrammingLanguage = 'javascript' | 'typescript' | 'jsx' | 'tsx' | 'html' | 'css';

// 主题类别
export type Category = 'basics' | 'hooks' | 'performance' | 'patterns' | 'components' | 'advanced';

// 搜索结果类型
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'concept' | 'hook' | 'interview' | 'typescript' | 'trick';
  url: string;
  relevance: number;
}

// 分页参数
export interface PaginationParams {
  page: number;
  pageSize: number;
  total: number;
}

// 排序参数
export interface SortParams {
  field: string;
  order: 'asc' | 'desc';
}

// 过滤参数
export interface FilterParams {
  category?: string;
  difficulty?: string;
  tags?: string[];
  search?: string;
}

// API 响应格式
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

// 用户偏好设置
export interface UserPreferences {
  theme: 'light' | 'dark';
  language: 'zh' | 'en';
  codeTheme: string;
  fontSize: number;
  bookmarkedItems: string[];
}

// 错误类型
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// 加载状态
export interface LoadingState {
  isLoading: boolean;
  error?: AppError;
}

// 路由参数
export interface RouteParams {
  id?: string;
  category?: string;
  [key: string]: string | undefined;
}