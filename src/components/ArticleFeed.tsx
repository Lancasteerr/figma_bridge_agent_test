import { useState } from 'react'
import type { Article } from '../types/community'
import { ArticleCard } from './ArticleCard'
import styles from './ArticleFeed.module.css'

interface ArticleFeedProps {
  articles: Article[]
}

// 每篇文章使用独立映射保存状态，避免一个卡片的操作影响另一张卡片。
export function ArticleFeed({ articles }: ArticleFeedProps) {
  const [followedById, setFollowedById] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(articles.map((article) => [article.id, article.initialFollowed])),
  )
  const [likedById, setLikedById] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(articles.map((article) => [article.id, article.initialLiked])),
  )

  const toggleState = (
    setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
    articleId: string,
  ) => {
    setter((current) => ({ ...current, [articleId]: !current[articleId] }))
  }

  return (
    <section className={styles.feed} aria-label="文章列表" data-visual-region="feed">
      {articles.map((article, index) => (
        <div key={article.id}>
          {index > 0 && (
            <div className={styles.dividerWrap} aria-hidden="true">
              <span />
            </div>
          )}
          <ArticleCard
            article={article}
            followed={followedById[article.id]}
            liked={likedById[article.id]}
            onToggleFollow={() => toggleState(setFollowedById, article.id)}
            onToggleLike={() => toggleState(setLikedById, article.id)}
          />
        </div>
      ))}
    </section>
  )
}
