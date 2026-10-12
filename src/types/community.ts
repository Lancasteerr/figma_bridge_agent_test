export type NavKey = 'recommended' | 'trending' | 'following'

export interface NavItem {
  id: NavKey
  label: string
  icon: string
}

export interface Article {
  id: string
  author: string
  meta: string
  title: string
  summary: string
  cover: string
  likeCount: number
  commentCount: number
  initiallyFollowing: boolean
  initiallyLiked: boolean
}
