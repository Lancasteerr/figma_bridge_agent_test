export type NavKey = 'recommended' | 'popular' | 'following'

// 文章字段只描述当前静态内容流和允许演示的本地交互状态。
export interface Article {
  id: string
  author: string
  meta: string
  title: string
  summary: string
  cover: string
  likes: number
  comments: number
  followed: boolean
  liked: boolean
}
