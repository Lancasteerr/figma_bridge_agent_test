import type { Article } from '../types/community'
import heroImage from '../assets/figma/home-hero.png'
import { ArticleCard } from './ArticleCard'
import styles from './components.module.css'

interface CenterFeedProps {
  articles: Article[]
  onToggleFollow: (id: string) => void
  onToggleLike: (id: string) => void
}

// 横图和文章流共用这一滚动容器，左右区域不会随内容移动。
export function CenterFeed({ articles, onToggleFollow, onToggleLike }: CenterFeedProps) {
  return (
    <section className={styles.centerScroller} aria-label="社区文章流">
      <img className={styles.heroImage} src={heroImage} alt="动漫风格的车内场景横图" />
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
