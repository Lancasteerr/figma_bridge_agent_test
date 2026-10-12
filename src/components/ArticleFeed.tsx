import type { Article } from '../types/community'
import { ArticleCard } from './ArticleCard'

interface ArticleFeedProps {
  articles: Article[]
  following: Record<string, boolean>
  liked: Record<string, boolean>
  likeCounts: Record<string, number>
  onToggleFollow: (id: string) => void
  onToggleLike: (id: string) => void
}

export function ArticleFeed({
  articles,
  following,
  liked,
  likeCounts,
  onToggleFollow,
  onToggleLike,
}: ArticleFeedProps) {
  return (
    <section className="article-feed" aria-label="社区文章">
      {articles.map((article, index) => (
        <div key={article.id} className="article-feed__item">
          {index > 0 && <div className="article-feed__divider" />}
          <ArticleCard
            article={article}
            following={following[article.id]}
            liked={liked[article.id]}
            likeCount={likeCounts[article.id]}
            onToggleFollow={() => onToggleFollow(article.id)}
            onToggleLike={() => onToggleLike(article.id)}
          />
        </div>
      ))}
    </section>
  )
}
