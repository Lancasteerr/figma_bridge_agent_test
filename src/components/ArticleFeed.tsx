import type { ArticleData } from '../types/community'
import { ArticleCard } from './ArticleCard'

interface ArticleFeedProps {
  articles: ArticleData[]
}

/** 连续内容流由文章卡片和一条内缩分隔线组成。 */
export function ArticleFeed({ articles }: ArticleFeedProps) {
  return (
    <section className="article-feed" aria-label="文章列表">
      {articles.map((article, index) => (
        <div className="article-feed__entry" key={article.id}>
          <ArticleCard article={article} />
          {index < articles.length - 1 && <div className="article-divider" />}
        </div>
      ))}
    </section>
  )
}

