import { ArticleCard } from '../ArticleCard/ArticleCard'
import type { Article } from '../../types/community'
import styles from './ArticleFeed.module.css'

interface ArticleFeedProps {
  articles: Article[]
  followedById: Record<string, boolean>
  likedById: Record<string, boolean>
  onToggleFollow: (articleId: string) => void
  onToggleLike: (articleId: string) => void
}

export function ArticleFeed({
  articles,
  followedById,
  likedById,
  onToggleFollow,
  onToggleLike,
}: ArticleFeedProps) {
  return (
    <section aria-label="文章列表" className={styles.feed}>
      {articles.map((article, index) => (
        <div key={article.id}>
          {index > 0 && <div aria-hidden="true" className={styles.divider} />}
          <ArticleCard
            article={article}
            followed={followedById[article.id]}
            liked={likedById[article.id]}
            onToggleFollow={onToggleFollow}
            onToggleLike={onToggleLike}
          />
        </div>
      ))}
    </section>
  )
}
