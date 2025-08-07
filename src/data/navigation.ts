import { 
  HiHome, 
  HiCode, 
  HiCog, 
  HiAcademicCap, 
  HiQuestionMarkCircle,
  HiLightningBolt 
} from 'react-icons/hi';
import { NavigationItem } from '../types/navigation';

export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    title: '首页',
    path: '/',
    icon: HiHome,
    description: '平台概览和快速导航'
  },
  {
    id: 'core-concepts',
    title: 'React 核心概念',
    path: '/core-concepts',
    icon: HiCode,
    description: 'React 基础知识和核心概念',
    children: [
      {
        id: 'components',
        title: '组件基础',
        path: '/core-concepts/components'
      },
      {
        id: 'jsx',
        title: 'JSX 语法',
        path: '/core-concepts/jsx'
      },
      {
        id: 'props-state',
        title: 'Props 和 State',
        path: '/core-concepts/props-state'
      },
      {
        id: 'lifecycle',
        title: '生命周期',
        path: '/core-concepts/lifecycle'
      }
    ]
  },
  {
    id: 'common-hooks',
    title: '常用 Hooks',
    path: '/common-hooks',
    icon: HiCog,
    description: 'React Hooks 详解和使用示例',
    children: [
      {
        id: 'built-in-hooks',
        title: '内置 Hooks',
        path: '/common-hooks/built-in'
      },
      {
        id: 'custom-hooks',
        title: '自定义 Hooks',
        path: '/common-hooks/custom'
      }
    ]
  },
  {
    id: 'typescript',
    title: 'TypeScript 应用',
    path: '/typescript',
    icon: HiAcademicCap,
    description: 'TypeScript 在 React 中的应用',
    children: [
      {
        id: 'basic-types',
        title: '基础类型',
        path: '/typescript/basic-types'
      },
      {
        id: 'component-types',
        title: '组件类型',
        path: '/typescript/component-types'
      },
      {
        id: 'advanced-patterns',
        title: '高级模式',
        path: '/typescript/advanced-patterns'
      }
    ]
  },
  {
    id: 'interview',
    title: '面试重点',
    path: '/interview',
    icon: HiQuestionMarkCircle,
    description: 'React 面试常见问题和答案',
    children: [
      {
        id: 'basic-questions',
        title: '基础问题',
        path: '/interview/basic'
      },
      {
        id: 'advanced-questions',
        title: '进阶问题',
        path: '/interview/advanced'
      },
      {
        id: 'coding-challenges',
        title: '编程挑战',
        path: '/interview/coding'
      }
    ]
  },
  {
    id: 'advanced-tricks',
    title: '高级技巧',
    path: '/advanced-tricks',
    icon: HiLightningBolt,
    description: 'React 高级用法和优化技巧',
    children: [
      {
        id: 'performance',
        title: '性能优化',
        path: '/advanced-tricks/performance'
      },
      {
        id: 'patterns',
        title: '设计模式',
        path: '/advanced-tricks/patterns'
      },
      {
        id: 'best-practices',
        title: '最佳实践',
        path: '/advanced-tricks/best-practices'
      }
    ]
  }
];