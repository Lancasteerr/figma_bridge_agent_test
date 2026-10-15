import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// 开发、构建和组件测试共用同一份 Vite 配置，避免环境差异影响页面表现。
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
