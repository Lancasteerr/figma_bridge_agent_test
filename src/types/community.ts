export type NavId = 'recommended' | 'hot' | 'following'

export interface NavItem {
  id: NavId
  label: string
  icon: string
}

export interface Article {
  id: string
  author: string
  meta: string
  title: string
  summary: string
  avatar: string
  cover: string
  likeCount: string
  commentCount: string
  initialFollowed: boolean
  initialLiked: boolean
}

export interface ArticleCardProps {
  article: Article
  followed: boolean
  liked: boolean
  onToggleFollow?: () => void
  onToggleLike?: () => void
}
