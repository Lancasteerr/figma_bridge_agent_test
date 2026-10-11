import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
    // 显式监听 IPv4 回环地址，避免 Windows 将 localhost 解析到不可访问的 IPv6 监听。
    server: {
        host: '127.0.0.1',
        port: 5173,
        strictPort: true,
    },
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
    },
})

