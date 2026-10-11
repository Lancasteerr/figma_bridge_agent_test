import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// 每个用例结束后清理 DOM，保证本地交互状态互不干扰。
afterEach(() => cleanup())

