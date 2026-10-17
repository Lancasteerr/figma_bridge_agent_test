import type { Article } from '../types/community'
import { ArticleCard } from './ArticleCard'
import styles from './ArticleFeed.module.css'

interface ArticleFeedProps {
  articles: Article[]
}

// 静态阶段直接使用设计稿初始状态；交互阶段会在此层注入独立状态。
export function ArticleFeed({ articles }: ArticleFeedProps) {
  return (
    <section className={styles.feed} aria-label="文章列表" data-visual-region="feed">
      {articles.map((article, index) => (
        <div key={article.id}>
          {index > 0 && (
            <div className={styles.dividerWrap} aria-hidden="true">
              <span />
            </div>
          )}
          <ArticleCard article={article} followed={article.initialFollowed} liked={article.initialLiked} />
        </div>
      ))}
    </section>
  )
}
