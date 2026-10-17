import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Vitest 未启用全局 API，因此显式清理每个测试挂载的 React 树。
afterEach(() => cleanup())
