export type NavKey = 'recommended' | 'popular' | 'following'

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
