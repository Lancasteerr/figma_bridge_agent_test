import type { Article } from '../types/community'
import { ArticleCard } from './ArticleCard'
import styles from './components.module.css'

interface CenterFeedProps {
  articles: Article[]
  onToggleFollow: (id: string) => void
  onToggleLike: (id: string) => void
}

export function CenterFeed({ articles, onToggleFollow, onToggleLike }: CenterFeedProps) {
  return (
    <section className={styles.centerScroller} aria-label="社区文章流">
      <div className={styles.heroPlaceholder} aria-label="首页横图" />
      <div className={styles.articleStream}>
        {articles.map((article, index) => (
          <ArticleCard
            article={article}
            onToggleFollow={onToggleFollow}
            onToggleLike={onToggleLike}
            key={article.id}
          >
            {index < articles.length - 1 && <div className={styles.articleDivider} />}
          </ArticleCard>
        ))}
      </div>
    </section>
  )
}
