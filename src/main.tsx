import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/noto-sans-sc'
import App from './App'
import './styles/global.css'

// 应用只挂载一次，交互状态全部保留在 React 组件树中。
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
