export type NavigationId = 'recommended' | 'trending' | 'following'

export interface NavItem {
  id: NavigationId
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
  likeCount: string
  commentCount: string
  initialFollowed: boolean
  initialLiked: boolean
}

export interface ArticleCardProps {
  article: Article
  followed: boolean
  liked: boolean
  onToggleFollow: (articleId: string) => void
  onToggleLike: (articleId: string) => void
}
