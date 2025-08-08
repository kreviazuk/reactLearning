// React Hooks 静态数据

import { HookInfo } from '../types/hooks';

export const hooks: HookInfo[] = [
  {
    id: 'useState',
    name: 'useState',
    description: '用于在函数组件中添加状态管理功能',
    category: 'built-in',
    type: 'state',
    syntax: 'const [state, setState] = useState(initialState)',
    parameters: [
      {
        name: 'initialState',
        type: 'any',
        description: '状态的初始值，可以是任何类型的值或返回初始值的函数',
        optional: false
      }
    ],
    returnValue: '返回一个数组，包含当前状态值和更新状态的函数',
    examples: [
      {
        id: 'useState-basic',
        title: '基本用法',
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>当前计数: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
      <button onClick={() => setCount(count - 1)}>
        减少
      </button>
    </div>
  );
}`,
        language: 'jsx',
        description: '使用 useState 管理计数器状态',
        runnable: true
      },
      {
        id: 'useState-object',
        title: '对象状态',
        code: `import { useState } from 'react';

function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateUser = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="姓名"
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
      />
      <input
        type="email"
        placeholder="邮箱"
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
      />
      <input
        type="number"
        placeholder="年龄"
        value={user.age}
        onChange={(e) => updateUser('age', parseInt(e.target.value))}
      />
    </form>
  );
}`,
        language: 'jsx',
        description: '使用 useState 管理对象状态',
        runnable: true
      }
    ],
    commonPatterns: [
      '使用函数式更新避免闭包陷阱',
      '合并对象状态时使用展开运算符',
      '初始状态使用函数避免重复计算'
    ],
    pitfalls: [
      '直接修改状态对象不会触发重新渲染',
      '状态更新是异步的，不能立即读取更新后的值',
      '在循环中使用 setState 可能导致性能问题'
    ],
    relatedHooks: ['useReducer', 'useCallback', 'useMemo']
  },
  {
    id: 'useEffect',
    name: 'useEffect',
    description: '用于处理副作用，如数据获取、订阅或手动更改 DOM',
    category: 'built-in',
    type: 'effect',
    syntax: 'useEffect(effect, dependencies?)',
    parameters: [
      {
        name: 'effect',
        type: 'function',
        description: '副作用函数，可以返回一个清理函数',
        optional: false
      },
      {
        name: 'dependencies',
        type: 'array',
        description: '依赖数组，控制副作用的执行时机',
        optional: true
      }
    ],
    returnValue: '无返回值',
    examples: [
      {
        id: 'useEffect-basic',
        title: '基本用法',
        code: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // 清理函数
    return () => clearInterval(interval);
  }, []); // 空依赖数组，只在组件挂载时执行

  return (
    <div>
      <h2>计时器: {seconds} 秒</h2>
    </div>
  );
}`,
        language: 'jsx',
        description: '使用 useEffect 创建计时器',
        runnable: true
      },
      {
        id: 'useEffect-fetch',
        title: '数据获取',
        code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('获取用户数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // 依赖 userId，当 userId 变化时重新获取

  if (loading) return <div>加载中...</div>;
  if (!user) return <div>用户不存在</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`,
        language: 'jsx',
        description: '使用 useEffect 获取用户数据',
        runnable: false
      }
    ],
    commonPatterns: [
      '使用空依赖数组模拟 componentDidMount',
      '在清理函数中取消订阅和清理资源',
      '使用依赖数组控制副作用的执行时机'
    ],
    pitfalls: [
      '忘记添加依赖项导致闭包陷阱',
      '依赖数组中包含对象或函数导致无限循环',
      '在副作用中直接调用 setState 可能导致无限循环'
    ],
    relatedHooks: ['useState', 'useCallback', 'useMemo', 'useLayoutEffect']
  },
  {
    id: 'useContext',
    name: 'useContext',
    description: '用于消费 React Context，避免 prop drilling',
    category: 'built-in',
    type: 'context',
    syntax: 'const value = useContext(Context)',
    parameters: [
      {
        name: 'Context',
        type: 'React.Context',
        description: '通过 React.createContext 创建的 Context 对象',
        optional: false
      }
    ],
    returnValue: '返回 Context 的当前值',
    examples: [
      {
        id: 'useContext-theme',
        title: '主题切换',
        code: `import { createContext, useContext, useState } from 'react';

// 创建 Context
const ThemeContext = createContext();

// Provider 组件
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 使用 Context 的组件
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
    >
      切换到 {theme === 'light' ? '暗色' : '亮色'} 主题
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div>
        <h1>主题切换示例</h1>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
}`,
        language: 'jsx',
        description: '使用 useContext 实现主题切换',
        runnable: true
      }
    ],
    commonPatterns: [
      '创建自定义 Hook 封装 Context 逻辑',
      '使用多个 Context 分离不同的状态',
      '结合 useReducer 管理复杂状态'
    ],
    pitfalls: [
      'Context 值变化会导致所有消费者重新渲染',
      '过度使用 Context 可能导致性能问题',
      '忘记提供 Provider 会使用默认值'
    ],
    relatedHooks: ['useReducer', 'useMemo', 'useCallback']
  },
  {
    id: 'useReducer',
    name: 'useReducer',
    description: '用于管理复杂状态逻辑，是 useState 的替代方案',
    category: 'built-in',
    type: 'state',
    syntax: 'const [state, dispatch] = useReducer(reducer, initialArg, init?)',
    parameters: [
      {
        name: 'reducer',
        type: 'function',
        description: '接收 (state, action) 并返回新状态的纯函数',
        optional: false
      },
      {
        name: 'initialArg',
        type: 'any',
        description: '初始状态值',
        optional: false
      },
      {
        name: 'init',
        type: 'function',
        description: '用于懒初始化状态的函数',
        optional: true
      }
    ],
    returnValue: '返回当前状态和 dispatch 函数的数组',
    examples: [
      {
        id: 'useReducer-counter',
        title: '计数器示例',
        code: `import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>计数: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>重置</button>
    </div>
  );
}`,
        language: 'jsx',
        description: '使用 useReducer 管理计数器状态',
        runnable: true
      }
    ],
    commonPatterns: [
      '使用 switch 语句处理不同的 action 类型',
      '将相关状态逻辑组织在一个 reducer 中',
      '使用 payload 传递额外数据'
    ],
    pitfalls: [
      'Reducer 必须是纯函数，不能有副作用',
      '忘记处理默认情况可能导致错误',
      '过度使用可能使简单状态变复杂'
    ],
    relatedHooks: ['useState', 'useContext', 'useMemo']
  },
  {
    id: 'useMemo',
    name: 'useMemo',
    description: '用于缓存计算结果，避免在每次渲染时重复执行昂贵的计算',
    category: 'built-in',
    type: 'performance',
    syntax: 'const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])',
    parameters: [
      {
        name: 'create',
        type: 'function',
        description: '返回要缓存值的函数',
        optional: false
      },
      {
        name: 'deps',
        type: 'array',
        description: '依赖数组，当依赖变化时重新计算',
        optional: false
      }
    ],
    returnValue: '返回缓存的计算结果',
    examples: [
      {
        id: 'useMemo-expensive',
        title: '昂贵计算缓存',
        code: `import { useState, useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const [filter, setFilter] = useState('');

  // 昂贵的过滤计算
  const filteredItems = useMemo(() => {
    console.log('执行过滤计算...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="搜索..."
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}`,
        language: 'jsx',
        description: '使用 useMemo 缓存过滤结果',
        runnable: false
      }
    ],
    commonPatterns: [
      '缓存昂贵的计算结果',
      '避免在每次渲染时创建新对象',
      '优化子组件的 props'
    ],
    pitfalls: [
      '过度使用可能适得其反',
      '依赖数组不正确导致缓存失效',
      '缓存简单计算没有意义'
    ],
    relatedHooks: ['useCallback', 'useState', 'useEffect']
  },
  {
    id: 'useCallback',
    name: 'useCallback',
    description: '用于缓存函数，避免在每次渲染时创建新的函数实例',
    category: 'built-in',
    type: 'performance',
    syntax: 'const memoizedCallback = useCallback(fn, deps)',
    parameters: [
      {
        name: 'fn',
        type: 'function',
        description: '要缓存的函数',
        optional: false
      },
      {
        name: 'deps',
        type: 'array',
        description: '依赖数组，当依赖变化时重新创建函数',
        optional: false
      }
    ],
    returnValue: '返回缓存的函数',
    examples: [
      {
        id: 'useCallback-child',
        title: '优化子组件渲染',
        code: `import { useState, useCallback, memo } from 'react';

const ChildComponent = memo(({ onClick, name }) => {
  console.log('ChildComponent 渲染:', name);
  return <button onClick={onClick}>{name}</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('按钮');

  // 使用 useCallback 缓存函数
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleNameChange = useCallback(() => {
    setName(prev => prev === '按钮' ? '新按钮' : '按钮');
  }, []);

  return (
    <div>
      <p>计数: {count}</p>
      <ChildComponent onClick={handleClick} name="计数按钮" />
      <ChildComponent onClick={handleNameChange} name={name} />
    </div>
  );
}`,
        language: 'jsx',
        description: '使用 useCallback 优化子组件渲染',
        runnable: true
      }
    ],
    commonPatterns: [
      '配合 React.memo 优化子组件',
      '缓存事件处理函数',
      '避免 useEffect 的无限循环'
    ],
    pitfalls: [
      '过度使用可能增加内存消耗',
      '依赖数组不正确导致闭包问题',
      '在没有性能问题时使用是多余的'
    ],
    relatedHooks: ['useMemo', 'memo', 'useEffect']
  },
  {
    id: 'useLocalStorage',
    name: 'useLocalStorage',
    description: '自定义 Hook，用于在 localStorage 中持久化状态',
    category: 'custom',
    type: 'utility',
    syntax: 'const [value, setValue] = useLocalStorage(key, initialValue)',
    parameters: [
      {
        name: 'key',
        type: 'string',
        description: 'localStorage 的键名',
        optional: false
      },
      {
        name: 'initialValue',
        type: 'any',
        description: '初始值',
        optional: false
      }
    ],
    returnValue: '返回当前值和设置值的函数',
    examples: [
      {
        id: 'useLocalStorage-impl',
        title: 'useLocalStorage 实现',
        code: `import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // 从 localStorage 获取初始值
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage key "' + key + '":', error);
      return initialValue;
    }
  });

  // 设置值的函数
  const setValue = (value) => {
    try {
      // 允许值是函数，用于函数式更新
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage key "' + key + '":', error);
    }
  };

  return [storedValue, setValue];
}

// 使用示例
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [language, setLanguage] = useLocalStorage('language', 'zh');

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">浅色主题</option>
        <option value="dark">深色主题</option>
      </select>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}`,
        language: 'jsx',
        description: '实现和使用 useLocalStorage Hook',
        runnable: true
      }
    ],
    commonPatterns: [
      '处理 JSON 序列化和反序列化',
      '提供错误处理机制',
      '支持函数式更新'
    ],
    pitfalls: [
      'localStorage 不可用时需要降级处理',
      'JSON.parse 可能抛出异常',
      '存储大量数据可能影响性能'
    ],
    relatedHooks: ['useState', 'useEffect']
  },
  {
    id: 'useFetch',
    name: 'useFetch',
    description: '自定义 Hook，用于处理数据获取的常见模式',
    category: 'custom',
    type: 'utility',
    syntax: 'const { data, loading, error } = useFetch(url, options)',
    parameters: [
      {
        name: 'url',
        type: 'string',
        description: '请求的 URL',
        optional: false
      },
      {
        name: 'options',
        type: 'object',
        description: 'fetch 选项',
        optional: true
      }
    ],
    returnValue: '返回包含 data、loading、error 的对象',
    examples: [
      {
        id: 'useFetch-impl',
        title: 'useFetch 实现',
        code: `import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
}

// 使用示例
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  if (!user) return <div>用户不存在</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`,
        language: 'jsx',
        description: '实现和使用 useFetch Hook',
        runnable: false
      }
    ],
    commonPatterns: [
      '统一的加载和错误状态管理',
      '自动处理请求生命周期',
      '支持请求选项配置'
    ],
    pitfalls: [
      '依赖数组中的对象可能导致无限循环',
      '组件卸载后设置状态会产生警告',
      '没有处理请求取消可能导致内存泄漏'
    ],
    relatedHooks: ['useState', 'useEffect', 'useCallback']
  }
];

export default hooks;