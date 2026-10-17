import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// 集中声明开发、构建和单元测试环境，避免组件层感知工具配置。
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
})
