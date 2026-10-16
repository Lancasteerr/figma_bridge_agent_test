import type { Article } from '../types/community'
import { ArticleCard } from './ArticleCard'
import styles from './ArticleFeed.module.css'

interface ArticleFeedProps {
  articles: Article[]
}

export function ArticleFeed({ articles }: ArticleFeedProps) {
  return (
    <section className={styles.feed} aria-label="文章列表">
      {articles.map((article, index) => (
        <div key={article.id}>
          <ArticleCard article={article} />
          {index < articles.length - 1 ? <div className={styles.divider} aria-hidden="true" /> : null}
        </div>
      ))}
    </section>
  )
}
