import type { PropsWithChildren } from 'react'
import { formatCount } from '../data/articles'
import type { Article } from '../types/community'
import styles from './components.module.css'

interface ArticleCardProps extends PropsWithChildren {
  article: Article
  onToggleFollow: (id: string) => void
  onToggleLike: (id: string) => void
}

export function ArticleCard({ article, onToggleFollow, onToggleLike, children }: ArticleCardProps) {
  return (
    <article className={styles.articleCard} data-state={article.liked ? 'liked' : 'default'}>
      <div className={styles.articleInner}>
        <header className={styles.authorRow}>
          <div className={styles.authorInfo}>
            <span className={styles.smallAvatar} />
            <span><strong>{article.author}</strong><small>{article.meta}</small></span>
          </div>
          <button
            className={styles.followButton}
            data-followed={article.followed}
            type="button"
            aria-pressed={article.followed}
            onClick={() => onToggleFollow(article.id)}
          >
            {article.followed ? '已关注' : '+ 关注'}
          </button>
        </header>
        <div className={styles.articleCopy}>
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
        </div>
        <div className={styles.coverPlaceholder} />
        <footer className={styles.engagementRow}>
          <button
            className={styles.engagementButton}
            data-active={article.liked}
            type="button"
            aria-label={`${article.liked ? '取消点赞' : '点赞'}，当前 ${formatCount(article.likes)}`}
            aria-pressed={article.liked}
            onClick={() => onToggleLike(article.id)}
          >
            <span aria-hidden="true">♡</span>{formatCount(article.likes)}
          </button>
          <button className={styles.engagementButton} type="button" aria-label={`评论，当前 ${article.comments}`}>
            <span aria-hidden="true">▣</span>{article.comments}
          </button>
        </footer>
      </div>
      {children}
    </article>
  )
}
