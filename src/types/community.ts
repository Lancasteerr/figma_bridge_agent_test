export type NavKey = 'recommended' | 'trending' | 'following'

export interface NavItem {
  key: NavKey
  label: string
  icon: string
}

export interface ArticleData {
  id: string
  author: string
  meta: string
  title: string
  summary: string
  cover: string
  likes: number
  likesLabel: string
  commentsLabel: string
  initialFollowing: boolean
  initialLiked: boolean
  keepCompactLikeLabel?: boolean
}

