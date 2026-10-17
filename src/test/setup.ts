import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// 每个用例结束后清空 DOM，避免多个主页实例影响可访问性查询。
afterEach(() => cleanup())
