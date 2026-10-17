import type { ArticleCardProps } from '../types/community'
import { ArticleActions } from './ArticleActions'
import styles from './ArticleCard.module.css'

// 单篇文章卡片复用相同几何结构，通过属性切换关注与点赞视觉状态。
export function ArticleCard({ article, followed, liked, onToggleFollow, onToggleLike }: ArticleCardProps) {
  return (
    <article className={styles.card} data-testid={`article-${article.id}`}>
      <header className={styles.authorBar}>
        <div className={styles.authorInfo}>
          <img className={styles.avatar} src={article.avatar} alt="" aria-hidden="true" />
          <div className={styles.authorCopy}>
            <span className={styles.authorName}>{article.author}</span>
            <span className={styles.meta}>{article.meta}</span>
          </div>
        </div>
        <button
          className={`${styles.followButton} ${followed ? styles.following : ''}`}
          type="button"
          aria-pressed={followed}
          onClick={onToggleFollow}
        >
          {followed ? '已关注' : '+ 关注'}
        </button>
      </header>
      <div className={styles.content}>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
      </div>
      <img className={styles.cover} src={article.cover} alt="" aria-hidden="true" />
      <ArticleActions
        liked={liked}
        likeCount={article.likeCount}
        commentCount={article.commentCount}
        onToggleLike={onToggleLike}
      />
    </article>
  )
}
