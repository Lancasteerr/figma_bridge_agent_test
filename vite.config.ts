import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// 将开发、构建和组件测试统一在同一套 Vite 配置下。
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
