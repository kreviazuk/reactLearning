# React 学习平台

一个基于 Vite + React + TypeScript 的现代化学习平台，专门用于展示和讲解 React 的核心概念、面试重点以及高级技巧。

## 功能特性

- 📚 React 核心概念详解
- 🎯 面试重点题库
- 🔧 常用 Hooks 学习
- 💡 TypeScript 在 React 中的应用
- ⚡ 高级技巧和最佳实践
- 💻 在线代码编辑器
- 🔍 全局搜索功能
- 📱 响应式设计

## 技术栈

- **构建工具**: Vite 4.x
- **前端框架**: React 18.x with TypeScript
- **路由**: React Router v6
- **样式**: Tailwind CSS
- **代码高亮**: Prism.js
- **在线编辑器**: Monaco Editor
- **图标**: React Icons
- **动画**: Framer Motion

## 开发环境设置

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 代码检查

```bash
pnpm lint
```

### 代码格式化

```bash
pnpm format
```

## 项目结构

```
src/
├── components/           # 可复用组件
│   ├── common/          # 通用组件
│   ├── CodeEditor/      # 代码编辑器组件
│   ├── Navigation/      # 导航组件
│   └── Layout/          # 布局组件
├── pages/               # 页面组件
│   ├── Home/           # 首页
│   ├── CoreConcepts/   # 核心概念
│   ├── CommonHooks/    # 常用Hooks
│   ├── TypeScript/     # TypeScript在React中的应用
│   ├── Interview/      # 面试重点
│   └── AdvancedTricks/ # 高级技巧
├── data/               # 静态数据
├── hooks/              # 自定义Hooks
├── utils/              # 工具函数
├── types/              # TypeScript类型定义
└── styles/             # 全局样式
```

## 开发指南

### 代码规范

项目使用 ESLint 和 Prettier 来保证代码质量和一致性。请在提交代码前运行：

```bash
pnpm lint
pnpm format
```

### 组件开发

- 所有组件都使用 TypeScript 编写
- 使用函数式组件和 Hooks
- 遵循单一职责原则
- 提供完整的 TypeScript 类型定义

### 样式规范

- 使用 Tailwind CSS 进行样式开发
- 响应式设计优先
- 保持设计系统的一致性

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。