import { ArticleCard } from '../ArticleCard/ArticleCard'
import type { Article } from '../../types/community'
import styles from './ArticleFeed.module.css'

interface ArticleFeedProps {
  articles: Article[]
}

export function ArticleFeed({ articles }: ArticleFeedProps) {
  return (
    <section aria-label="文章列表" className={styles.feed}>
      {articles.map((article, index) => (
        <div key={article.id}>
          {index > 0 && <div aria-hidden="true" className={styles.divider} />}
          <ArticleCard article={article} followed={article.initialFollowed} liked={article.initialLiked} />
        </div>
      ))}
    </section>
  )
}
