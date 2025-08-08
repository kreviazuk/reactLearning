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
  },
  {
    id: 'generic-components',
    title: '泛型组件设计',
    description: '学习如何使用 TypeScript 泛型创建可复用的 React 组件',
    category: 'patterns',
    difficulty: 'advanced',
    content: `
泛型是 TypeScript 的强大特性，可以让我们创建更加灵活和可复用的组件。

## 基础泛型组件

使用泛型可以让组件适应不同的数据类型，提高代码复用性。

## 约束泛型

通过约束泛型，我们可以确保传入的类型满足特定条件。
    `,
    jsExample: `// JavaScript 版本 - 缺乏类型安全
function DataList({ items, renderItem, onItemClick }) {
  return (
    <div className="data-list">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="data-item"
          onClick={() => onItemClick(item)}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

// 使用时没有类型检查
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

<DataList
  items={users}
  renderItem={(user) => <span>{user.name}</span>}
  onItemClick={(user) => console.log(user.email)}
/>`,
    tsExample: `// TypeScript 版本 - 完整的类型安全
interface DataListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onItemClick: (item: T) => void;
  keyExtractor?: (item: T) => string | number;
}

function DataList<T>({ 
  items, 
  renderItem, 
  onItemClick, 
  keyExtractor = (item, index) => index 
}: DataListProps<T>) {
  return (
    <div className="data-list">
      {items.map((item, index) => (
        <div 
          key={keyExtractor(item, index)} 
          className="data-item"
          onClick={() => onItemClick(item)}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

// 使用时有完整的类型检查和自动补全
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

<DataList<User>
  items={users}
  renderItem={(user) => <span>{user.name}</span>}
  onItemClick={(user) => console.log(user.email)}
  keyExtractor={(user) => user.id}
/>`,
    benefits: [
      '类型安全的泛型组件，适用于多种数据类型',
      '完整的类型推断和自动补全',
      '编译时检查，防止类型错误',
      '更好的代码复用性和可维护性'
    ],
    commonMistakes: [
      '没有为泛型提供合适的约束',
      '过度使用泛型导致代码复杂',
      '忘记在使用时指定泛型类型'
    ],
    bestPractices: [
      '为泛型提供有意义的名称',
      '使用约束限制泛型类型',
      '提供默认泛型类型',
      '合理使用泛型，避免过度设计'
    ],
    relatedTopics: ['component-props', 'hooks-typing', 'custom-hooks']
  },
  {
    id: 'custom-hooks',
    title: '自定义 Hooks 类型',
    description: '学习如何为自定义 React Hooks 定义正确的 TypeScript 类型',
    category: 'hooks',
    difficulty: 'intermediate',
    content: `
自定义 Hooks 是 React 中复用逻辑的重要方式，TypeScript 可以为其提供强大的类型支持。

## 基础自定义 Hook

为自定义 Hook 定义清晰的输入输出类型。

## 泛型 Hook

使用泛型让 Hook 适应不同的数据类型。
    `,
    jsExample: `// JavaScript 版本
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// 使用时没有类型提示
const [name, setName] = useLocalStorage('name', '');
const [user, setUser] = useLocalStorage('user', null);`,
    tsExample: `// TypeScript 版本
import { useState, useEffect } from 'react';

function useLocalStorage<T>(
  key: string, 
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":, error\`);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":, error\`);
    }
  };

  return [storedValue, setValue];
}

// 使用时有完整的类型安全
const [name, setName] = useLocalStorage<string>('name', '');
const [user, setUser] = useLocalStorage<User | null>('user', null);

interface User {
  id: number;
  name: string;
  email: string;
}`,
    benefits: [
      '自定义 Hook 有明确的类型定义',
      '使用时获得完整的类型检查',
      '更好的开发体验和错误提示',
      '便于团队协作和代码维护'
    ],
    commonMistakes: [
      '没有为 Hook 的返回值定义类型',
      '忽略了泛型的使用场景',
      '没有处理异步操作的类型'
    ],
    bestPractices: [
      '为复杂的 Hook 定义专门的类型接口',
      '使用泛型提高 Hook 的复用性',
      '为异步 Hook 提供加载和错误状态',
      '导出 Hook 相关的类型定义'
    ],
    relatedTopics: ['hooks-typing', 'generic-components', 'async-patterns']
  },
  {
    id: 'form-handling',
    title: '表单处理类型',
    description: '学习如何在 React 表单中使用 TypeScript 进行类型安全的数据处理',
    category: 'components',
    difficulty: 'intermediate',
    content: `
表单处理是 Web 应用中的常见场景，TypeScript 可以帮助我们创建类型安全的表单组件。

## 表单数据类型

定义表单数据的接口，确保数据结构的一致性。

## 表单验证

结合类型定义进行表单验证，提供更好的用户体验。
    `,
    jsExample: `// JavaScript 版本
function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = '姓名不能为空';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 表单字段 */}
    </form>
  );
}`,
    tsExample: `// TypeScript 版本
import { useState, FormEvent, ChangeEvent } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subscribe: boolean;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  initialData?: Partial<ContactFormData>;
}

function ContactForm({ onSubmit, initialData = {} }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    subscribe: false,
    ...initialData
  });
  
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // 清除对应字段的错误
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '姓名不能为空';
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '消息内容不能为空';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 表单字段实现 */}
    </form>
  );
}`,
    benefits: [
      '表单数据结构类型安全',
      '编译时检查表单字段',
      '更好的表单验证体验',
      '减少表单处理中的错误'
    ],
    commonMistakes: [
      '没有为表单数据定义接口',
      '事件处理函数类型不正确',
      '忽略了表单验证的类型定义'
    ],
    bestPractices: [
      '为表单数据和错误分别定义接口',
      '使用联合类型处理不同的输入元素',
      '提供初始数据的类型支持',
      '合理使用 Partial 类型处理可选字段'
    ],
    relatedTopics: ['event-handling', 'component-props', 'validation-patterns']
  },
  {
    id: 'async-patterns',
    title: '异步操作类型',
    description: '学习如何在 React 中正确处理异步操作的 TypeScript 类型',
    category: 'patterns',
    difficulty: 'advanced',
    content: `
异步操作是现代 React 应用的核心部分，TypeScript 可以帮助我们更安全地处理异步逻辑。

## Promise 类型

正确定义 Promise 的返回类型，确保异步操作的类型安全。

## 错误处理

为异步操作定义完整的错误处理类型。
    `,
    jsExample: `// JavaScript 版本
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const refetch = () => {
    setError(null);
    fetchData();
  };

  return { data, loading, error, refetch };
}

// 使用时没有类型提示
const { data, loading, error } = useApi('/api/users');`,
    tsExample: `// TypeScript 版本
import { useState, useEffect, useCallback } from 'react';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useApi<T>(url: string): ApiResponse<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: true,
    error: null
  });

  const fetchData = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const result: T = await response.json();
      setState({ data: result, loading: false, error: null });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setState({ data: null, loading: false, error: errorMessage });
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch };
}

// 使用时有完整的类型安全
interface User {
  id: number;
  name: string;
  email: string;
}

const { data, loading, error, refetch } = useApi<User[]>('/api/users');
// data 的类型是 User[] | null`,
    benefits: [
      '异步操作有完整的类型定义',
      '编译时检查 API 响应类型',
      '更好的错误处理和调试体验',
      '减少异步操作中的类型错误'
    ],
    commonMistakes: [
      '没有为 API 响应定义类型',
      '忽略了错误状态的类型定义',
      '没有正确处理 Promise 的类型'
    ],
    bestPractices: [
      '为 API 响应数据定义明确的接口',
      '使用泛型让异步 Hook 更通用',
      '提供完整的加载和错误状态',
      '合理使用 useCallback 优化性能'
    ],
    relatedTopics: ['custom-hooks', 'error-handling', 'performance-patterns']
  }
];

export default typescriptTopics;