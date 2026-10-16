import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// 测试与开发共用同一份 Vite 配置，确保资源解析行为一致。
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: true,
  },
})
