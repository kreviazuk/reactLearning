// React 核心概念静态数据

import { Concept } from '../types/concept';

export const concepts: Concept[] = [
  {
    id: 'jsx',
    title: 'JSX 语法',
    description: 'JSX 是 JavaScript 的语法扩展，允许在 JavaScript 中编写类似 HTML 的代码',
    category: 'basics',
    difficulty: 'beginner',
    content: `
JSX (JavaScript XML) 是 React 的核心特性之一，它允许我们在 JavaScript 代码中编写类似 HTML 的标记语言。

## 基本语法

JSX 看起来像 HTML，但实际上是 JavaScript 的语法糖。每个 JSX 元素都会被转换为 React.createElement() 的调用。

## 规则

1. JSX 必须有一个根元素
2. 所有标签必须闭合
3. 使用 className 而不是 class
4. 使用 camelCase 命名属性
    `,
    codeExamples: [
      {
        id: 'jsx-basic',
        title: '基本 JSX 语法',
        code: `function Welcome() {
  return (
    <div className="welcome">
      <h1>Hello, React!</h1>
      <p>这是一个 JSX 示例</p>
    </div>
  );
}`,
        language: 'jsx',
        description: '展示基本的 JSX 语法结构',
        runnable: true
      },
      {
        id: 'jsx-expression',
        title: 'JSX 中的表达式',
        code: `function Greeting({ name }) {
  const message = "欢迎学习 React";
  
  return (
    <div>
      <h1>{message}</h1>
      <p>Hello, {name}!</p>
      <p>当前时间: {new Date().toLocaleString()}</p>
    </div>
  );
}`,
        language: 'jsx',
        description: '在 JSX 中使用 JavaScript 表达式',
        runnable: true
      }
    ],
    relatedConcepts: ['components', 'props', 'virtual-dom'],
    tags: ['jsx', 'syntax', 'basics']
  },
  {
    id: 'components',
    title: 'React 组件',
    description: '组件是 React 应用的基本构建块，可以是函数组件或类组件',
    category: 'basics',
    difficulty: 'beginner',
    content: `
React 组件是独立、可复用的代码片段。它们的作用与 JavaScript 函数类似，接受任意的入参（称为 "props"），并返回用于描述页面展示内容的 React 元素。

## 函数组件

函数组件是定义组件的最简单方式，它就是一个 JavaScript 函数。

## 类组件

类组件使用 ES6 的 class 语法定义，继承自 React.Component。
    `,
    codeExamples: [
      {
        id: 'function-component',
        title: '函数组件',
        code: `function Button({ text, onClick }) {
  return (
    <button 
      className="btn btn-primary"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// 使用组件
function App() {
  const handleClick = () => {
    alert('按钮被点击了！');
  };

  return (
    <div>
      <Button text="点击我" onClick={handleClick} />
    </div>
  );
}`,
        language: 'jsx',
        description: '函数组件的定义和使用',
        runnable: true
      }
    ],
    relatedConcepts: ['jsx', 'props', 'state'],
    tags: ['components', 'function', 'class', 'basics']
  },
  {
    id: 'props',
    title: 'Props 属性',
    description: 'Props 是组件的输入参数，用于从父组件向子组件传递数据',
    category: 'basics',
    difficulty: 'beginner',
    content: `
Props（properties 的简写）是 React 组件的输入。它们是从父组件传递给子组件的数据。

## 特点

1. Props 是只读的
2. 组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props
3. 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改
    `,
    codeExamples: [
      {
        id: 'props-basic',
        title: 'Props 基本用法',
        code: `function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>年龄: {age}</p>
      <p>邮箱: {email}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <UserCard 
        name="张三" 
        age={25} 
        email="zhangsan@example.com" 
      />
      <UserCard 
        name="李四" 
        age={30} 
        email="lisi@example.com" 
      />
    </div>
  );
}`,
        language: 'jsx',
        description: '展示如何传递和使用 props',
        runnable: true
      }
    ],
    relatedConcepts: ['components', 'jsx', 'state'],
    tags: ['props', 'data-flow', 'basics']
  },
  {
    id: 'state',
    title: 'State 状态',
    description: 'State 是组件内部的数据，可以随时间变化并触发重新渲染',
    category: 'basics',
    difficulty: 'intermediate',
    content: `
State 是组件内部的数据存储。与 props 不同，state 是可变的，组件可以随时间改变 state。

## useState Hook

在函数组件中，我们使用 useState Hook 来添加 state。

## 状态更新

状态更新是异步的，React 可能会将多个 setState() 调用合并成一个调用。
    `,
    codeExamples: [
      {
        id: 'state-counter',
        title: '计数器示例',
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h2>计数器: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
}`,
        language: 'jsx',
        description: '使用 useState 创建计数器',
        runnable: true
      }
    ],
    relatedConcepts: ['hooks', 'usestate', 'lifecycle'],
    tags: ['state', 'useState', 'hooks', 'basics']
  }
];

export default concepts;