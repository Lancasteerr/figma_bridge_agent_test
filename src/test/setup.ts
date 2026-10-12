import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Vitest 未启用全局 API 时，显式清理每个用例挂载的页面，避免状态相互污染。
afterEach(() => {
  cleanup()
})

