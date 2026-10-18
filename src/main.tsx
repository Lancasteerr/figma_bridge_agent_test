import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles.css';

// 使用严格模式检查组件生命周期，交互状态不写入本地存储。
createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>,
);
