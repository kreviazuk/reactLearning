// React 面试题静态数据

import { InterviewQuestion } from '../types/interview';

export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'what-is-react',
    question: '什么是 React？它有什么特点？',
    answer: `React 是由 Facebook 开发的用于构建用户界面的 JavaScript 库。

主要特点：

1. **声明式编程**：描述 UI 应该是什么样子，而不是如何实现
2. **组件化**：将 UI 拆分为独立、可复用的组件
3. **虚拟 DOM**：使用虚拟 DOM 提高性能
4. **单向数据流**：数据从父组件流向子组件
5. **JSX 语法**：在 JavaScript 中编写类似 HTML 的代码
6. **生态系统丰富**：有大量的第三方库和工具

React 的核心思想是"Learn Once, Write Anywhere"，可以用于 Web、移动端（React Native）等多个平台。`,
    difficulty: 'easy',
    category: '基础概念',
    tags: ['react', '基础', '特点'],
    codeExample: {
      id: 'react-example',
      title: 'React 组件示例',
      code: `// 声明式的 React 组件
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// 组件化使用
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}`,
      language: 'jsx',
      description: '展示 React 的声明式和组件化特点'
    },
    followUpQuestions: [
      'React 与 Vue、Angular 有什么区别？',
      '什么是虚拟 DOM？它是如何工作的？'
    ]
  },
  {
    id: 'virtual-dom',
    question: '什么是虚拟 DOM？它是如何工作的？',
    answer: `虚拟 DOM（Virtual DOM）是 React 的核心概念之一，它是真实 DOM 的 JavaScript 表示。

## 工作原理：

1. **创建虚拟 DOM**：React 将组件树转换为虚拟 DOM 树
2. **状态变化**：当状态发生变化时，React 创建新的虚拟 DOM 树
3. **Diff 算法**：比较新旧虚拟 DOM 树，找出差异
4. **更新真实 DOM**：只更新发生变化的部分

## 优势：

- **性能优化**：批量更新，减少 DOM 操作
- **跨浏览器兼容**：抽象了 DOM 操作
- **可预测性**：纯函数式的更新过程
- **开发体验**：可以进行时间旅行调试

## Diff 算法的三个策略：

1. **Tree Diff**：只比较同层级节点
2. **Component Diff**：相同类型组件才进行比较
3. **Element Diff**：通过 key 识别元素变化`,
    difficulty: 'medium',
    category: '核心原理',
    tags: ['virtual-dom', 'diff', '性能'],
    codeExample: {
      id: 'virtual-dom-example',
      title: '虚拟 DOM 示例',
      code: `// 虚拟 DOM 的 JavaScript 表示
const virtualDOM = {
  type: 'div',
  props: {
    className: 'container',
    children: [
      {
        type: 'h1',
        props: {
          children: 'Hello World'
        }
      },
      {
        type: 'p',
        props: {
          children: 'This is a paragraph'
        }
      }
    ]
  }
};

// 对应的真实 DOM
// <div class="container">
//   <h1>Hello World</h1>
//   <p>This is a paragraph</p>
// </div>`,
      language: 'javascript',
      description: '虚拟 DOM 的数据结构示例'
    },
    followUpQuestions: [
      'React Fiber 是什么？它解决了什么问题？',
      'key 属性在 React 中的作用是什么？'
    ]
  },
  {
    id: 'hooks-vs-class',
    question: 'React Hooks 相比类组件有什么优势？',
    answer: `React Hooks 是 React 16.8 引入的新特性，让函数组件也能使用状态和生命周期功能。

## Hooks 的优势：

### 1. **更简洁的代码**
- 函数组件比类组件更简洁
- 减少了 this 绑定的复杂性
- 更少的样板代码

### 2. **更好的逻辑复用**
- 自定义 Hook 可以轻松复用状态逻辑
- 避免了高阶组件和 render props 的嵌套地狱
- 更直观的逻辑组织方式

### 3. **更好的性能**
- 函数组件更容易优化
- 减少了组件实例的创建开销
- 更好的 Tree Shaking 支持

### 4. **更好的测试**
- 纯函数更容易测试
- 可以单独测试自定义 Hook
- 减少了 mock 的复杂性

### 5. **更好的 TypeScript 支持**
- 类型推断更准确
- 更少的类型声明
- 更好的开发体验`,
    difficulty: 'medium',
    category: 'Hooks',
    tags: ['hooks', 'class-component', '对比'],
    codeExample: {
      id: 'hooks-vs-class-example',
      title: 'Hooks vs 类组件对比',
      code: `// 类组件版本
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    document.title = \`Count: \${this.state.count}\`;
  }

  componentDidUpdate() {
    document.title = \`Count: \${this.state.count}\`;
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

// Hooks 版本
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`,
      language: 'jsx',
      description: '同样功能的类组件和 Hooks 实现对比'
    },
    followUpQuestions: [
      '什么是自定义 Hook？如何创建？',
      'useEffect 如何替代类组件的生命周期方法？'
    ]
  },
  {
    id: 'useeffect-lifecycle',
    question: 'useEffect 如何模拟类组件的生命周期方法？',
    answer: `useEffect 是一个强大的 Hook，可以模拟类组件的所有生命周期方法。

## 生命周期对应关系：

### 1. **componentDidMount**
\`\`\`javascript
useEffect(() => {
  // 组件挂载后执行
}, []); // 空依赖数组
\`\`\`

### 2. **componentDidUpdate**
\`\`\`javascript
useEffect(() => {
  // 每次更新后执行
}); // 没有依赖数组

// 或者监听特定值的变化
useEffect(() => {
  // 当 count 变化时执行
}, [count]);
\`\`\`

### 3. **componentWillUnmount**
\`\`\`javascript
useEffect(() => {
  return () => {
    // 组件卸载前执行清理
  };
}, []);
\`\`\`

### 4. **组合使用**
一个 useEffect 可以同时处理挂载、更新和卸载：

\`\`\`javascript
useEffect(() => {
  // 挂载和更新时执行
  
  return () => {
    // 卸载时执行清理
  };
}, [dependency]);
\`\`\`

## 注意事项：

- 依赖数组决定了 effect 的执行时机
- 清理函数用于避免内存泄漏
- 可以使用多个 useEffect 分离不同的逻辑`,
    difficulty: 'medium',
    category: 'Hooks',
    tags: ['useEffect', 'lifecycle', '生命周期'],
    codeExample: {
      id: 'useeffect-lifecycle-example',
      title: 'useEffect 模拟生命周期',
      code: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 模拟 componentDidMount 和 componentWillUnmount
  useEffect(() => {
    console.log('Timer 组件已挂载');
    
    return () => {
      console.log('Timer 组件即将卸载');
    };
  }, []);

  // 模拟 componentDidUpdate（监听 isRunning 变化）
  useEffect(() => {
    let interval = null;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    // 清理函数（模拟 componentWillUnmount 的清理工作）
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // 只在 isRunning 变化时执行

  // 模拟 componentDidUpdate（监听 seconds 变化）
  useEffect(() => {
    document.title = \`Timer: \${seconds}s\`;
  }, [seconds]);

  return (
    <div>
      <h2>计时器: {seconds} 秒</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? '暂停' : '开始'}
      </button>
      <button onClick={() => setSeconds(0)}>重置</button>
    </div>
  );
}`,
      language: 'jsx',
      description: '使用 useEffect 模拟各种生命周期方法'
    },
    followUpQuestions: [
      'useEffect 的依赖数组有什么作用？',
      '如何避免 useEffect 的无限循环？'
    ]
  },
  {
    id: 'react-performance',
    question: 'React 中有哪些性能优化的方法？',
    answer: `React 性能优化是一个重要话题，有多种方法可以提升应用性能。

## 主要优化方法：

### 1. **React.memo**
- 对函数组件进行浅比较
- 避免不必要的重新渲染

### 2. **useMemo**
- 缓存计算结果
- 避免重复的昂贵计算

### 3. **useCallback**
- 缓存函数引用
- 避免子组件不必要的重新渲染

### 4. **代码分割**
- React.lazy 和 Suspense
- 按需加载组件

### 5. **虚拟化**
- 对于大列表使用虚拟滚动
- 只渲染可见的元素

### 6. **避免内联对象和函数**
- 在 render 中创建新对象会导致重新渲染

### 7. **合理使用 key**
- 帮助 React 识别元素变化
- 提高 diff 算法效率

### 8. **状态提升和下沉**
- 将状态放在合适的层级
- 减少不必要的重新渲染范围`,
    difficulty: 'hard',
    category: '性能优化',
    tags: ['performance', 'optimization', 'memo', 'useMemo'],
    codeExample: {
      id: 'performance-optimization-example',
      title: 'React 性能优化示例',
      code: `import React, { useState, useMemo, useCallback, memo } from 'react';

// 使用 React.memo 优化子组件
const ExpensiveChild = memo(({ data, onUpdate }) => {
  console.log('ExpensiveChild 重新渲染');
  
  return (
    <div>
      <h3>处理后的数据: {data.processed}</h3>
      <button onClick={onUpdate}>更新</button>
    </div>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // 使用 useMemo 缓存昂贵的计算
  const expensiveData = useMemo(() => {
    console.log('执行昂贵的计算');
    return {
      processed: items.reduce((sum, item) => sum + item * 2, 0)
    };
  }, [items]); // 只在 items 变化时重新计算

  // 使用 useCallback 缓存函数引用
  const handleUpdate = useCallback(() => {
    setItems(prev => [...prev, prev.length + 1]);
  }, []);

  // 避免内联对象（错误示例）
  // const badStyle = { color: 'red' }; // 每次渲染都创建新对象

  // 正确做法：将对象提取到组件外部或使用 useMemo
  const goodStyle = useMemo(() => ({ color: 'red' }), []);

  return (
    <div>
      <h2>计数: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        增加计数
      </button>
      
      {/* 由于使用了 memo 和 useCallback，
          ExpensiveChild 不会因为 count 变化而重新渲染 */}
      <ExpensiveChild 
        data={expensiveData} 
        onUpdate={handleUpdate} 
      />
      
      <div style={goodStyle}>
        优化后的样式
      </div>
    </div>
  );
}`,
      language: 'jsx',
      description: '综合使用多种性能优化技术'
    },
    followUpQuestions: [
      'React.memo 和 useMemo 有什么区别？',
      '什么时候应该使用 useCallback？'
    ]
  }
];

export default interviewQuestions;