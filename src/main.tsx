import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// React 应用只挂载一次，页面模块由 App 统一组织。
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
