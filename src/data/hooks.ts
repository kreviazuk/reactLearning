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
  }
];

export default hooks;