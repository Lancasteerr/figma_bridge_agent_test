import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 固定 IPv4 地址，便于本机浏览器和插件访问同一开发服务。
export default defineConfig({
  plugins: [react()],
  server: { host: '127.0.0.1', port: 5173, strictPort: true },
});
