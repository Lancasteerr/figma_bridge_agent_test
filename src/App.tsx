import { HomePage } from './pages/HomePage'

// 根组件只负责承载当前唯一的社区主页，不引入设计稿未定义的路由。
export default function App() {
  return <HomePage />
}
