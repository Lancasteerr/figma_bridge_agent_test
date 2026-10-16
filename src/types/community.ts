export type NavKey = 'recommend' | 'hot' | 'following'

export interface Article {
  id: string
  authorName: string
  authorMeta: string
  title: string
  summary: string
  cover: string
  coverAlt: string
  initialFollowing: boolean
  initialLiked: boolean
  likeCount: number
  commentCount: number
}

export interface ArticleInteractionState {
  following: boolean
  liked: boolean
  likeCount: number
}
