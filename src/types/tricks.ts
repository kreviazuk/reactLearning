// 高级技巧相关的类型定义

export interface PerformanceMetrics {
  improvement: string;
  metrics: string;
}

export interface AdvancedTrick {
  id: string;
  title: string;
  description: string;
  useCase: string;
  beforeCode: string;
  afterCode: string;
  performance?: PerformanceMetrics;
  warnings?: string[];
}