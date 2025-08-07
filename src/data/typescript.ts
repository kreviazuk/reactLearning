// TypeScript 在 React 中的应用静态数据

import { TypeScriptTopic } from '../types/typescript';

export const typescriptTopics: TypeScriptTopic[] = [
  {
    id: 'component-props',
    title: '组件 Props 类型定义',
    description: '学习如何为 React 组件定义 TypeScript 类型',
    category: 'components',
    difficulty: 'beginner',
    content: `
在 React 中使用 TypeScript 的第一步是为组件的 props 定义类型。这样可以提供更好的类型安全和开发体验。

## 基本 Props 类型

可以使用接口（interface）或类型别名（type）来定义 props 的类型。

## 可选属性

使用 ? 标记可选属性，为可选属性提供默认值。
    `,
    jsExample: `// JavaScript 版本
function Button({ text, onClick, disabled, variant }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant || 'primary'}\`}
    >
      {text}
    </button>
  );
}

// 使用时没有类型检查
<Button text="点击我" onClick={handleClick} variant="secondary" />`,
    tsExample: `// TypeScript 版本
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

function Button({ text, onClick, disabled = false, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {text}
    </button>
  );
}

// 使用时有完整的类型检查和自动补全
<Button text="点击我" onClick={handleClick} variant="secondary" />`,
    benefits: [
      '编译时类型检查，减少运行时错误',
      'IDE 提供更好的自动补全和提示',
      '重构时更安全，能自动发现类型不匹配',
      '代码文档化，props 类型即文档'
    ],
    commonMistakes: [
      '忘记为事件处理函数定义正确的类型',
      '使用 any 类型失去类型安全',
      '没有为可选属性提供默认值'
    ],
    bestPractices: [
      '使用 interface 定义 props 类型',
      '为联合类型使用字面量类型',
      '使用泛型提高组件复用性',
      '导出 props 类型供其他组件使用'
    ],
    relatedTopics: ['event-handling', 'generic-components', 'children-types']
  },
  {
    id: 'event-handling',
    title: '事件处理类型',
    description: '学习如何正确定义 React 事件处理函数的类型',
    category: 'components',
    difficulty: 'intermediate',
    content: `
React 事件处理是开发中的常见场景，TypeScript 为各种事件提供了专门的类型定义。

## 常见事件类型

React 提供了丰富的事件类型，如 MouseEvent、ChangeEvent、FormEvent 等。

## 事件处理函数

正确定义事件处理函数的参数类型，可以获得更好的类型安全。
    `,
    jsExample: `// JavaScript 版本
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 没有类型提示，容易出错
    console.log(e.target.email.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={handleInputChange}
      />
      <button type="submit">登录</button>
    </form>
  );
}`,
    tsExample: `// TypeScript 版本
import { useState, FormEvent, ChangeEvent } from 'react';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 有完整的类型提示和检查
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    console.log({ email, password });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        value={email}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={handleInputChange}
      />
      <button type="submit">登录</button>
    </form>
  );
}`,
    benefits: [
      '事件对象有完整的类型提示',
      '防止访问不存在的属性',
      '更好的重构支持',
      '减少事件处理中的错误'
    ],
    commonMistakes: [
      '使用错误的事件类型',
      '忘记指定泛型参数',
      '混淆不同元素的事件类型'
    ],
    bestPractices: [
      '使用具体的事件类型而不是通用的 Event',
      '为事件处理函数单独定义类型',
      '使用 useCallback 优化事件处理函数',
      '合理使用事件委托'
    ],
    relatedTopics: ['component-props', 'hooks-typing', 'form-handling']
  },
  {
    id: 'hooks-typing',
    title: 'Hooks 类型定义',
    description: '学习如何为 React Hooks 提供正确的 TypeScript 类型',
    category: 'hooks',
    difficulty: 'intermediate',
    content: `
React Hooks 在 TypeScript 中需要正确的类型定义才能发挥最大作用。

## useState 类型推断

TypeScript 可以从初始值推断状态类型，但有时需要显式指定。

## useEffect 依赖类型

确保 useEffect 的依赖数组类型正确。
    `,
    jsExample: `// JavaScript 版本
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser(userId)
      .then(userData => {
        setUser(userData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`,
    tsExample: `// TypeScript 版本
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

interface UserProfileProps {
  userId: number;
}

function UserProfile({ userId }: UserProfileProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const userData: User = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {user.avatar && <img src={user.avatar} alt={user.name} />}
    </div>
  );
}`,
    benefits: [
      '状态类型安全，防止类型错误',
      '更好的自动补全和提示',
      '编译时发现潜在问题',
      '重构时更安全'
    ],
    commonMistakes: [
      '没有为复杂状态指定类型',
      '使用 any 类型失去类型安全',
      '忘记处理 null 和 undefined 情况'
    ],
    bestPractices: [
      '为复杂状态定义接口',
      '使用联合类型处理多种状态',
      '合理使用泛型提高复用性',
      '为自定义 Hook 定义返回类型'
    ],
    relatedTopics: ['component-props', 'custom-hooks', 'generic-components']
  }
];

export default typescriptTopics;