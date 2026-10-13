import type { Article } from '../data/articles'
import { ArticleCard } from './ArticleCard'

export interface ArticleViewState {
  following: boolean
  liked: boolean
  likeLabel: string
}

interface ArticleFeedProps {
  articles: Article[]
  states: Record<string, ArticleViewState>
  onToggleFollow: (articleId: string) => void
  onToggleLike: (articleId: string) => void
}

/** 连续内容流使用单一外框，并以一像素分隔线连接两篇文章。 */
export function ArticleFeed({ articles, states, onToggleFollow, onToggleLike }: ArticleFeedProps) {
  return (
    <section aria-label="社区文章" className="article-feed">
      {articles.map((article, index) => {
        const state = states[article.id]

        return (
          <div className="article-feed__entry" key={article.id}>
            {index > 0 && <div aria-hidden="true" className="article-feed__divider" />}
            <ArticleCard
              article={article}
              isFollowing={state.following}
              isLiked={state.liked}
              likeLabel={state.likeLabel}
              onToggleFollow={() => onToggleFollow(article.id)}
              onToggleLike={() => onToggleLike(article.id)}
            />
          </div>
        )
      })}
    </section>
  )
}
