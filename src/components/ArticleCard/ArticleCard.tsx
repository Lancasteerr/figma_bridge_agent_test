import avatar from '../../assets/images/avatar.jpg'
import commentIcon from '../../assets/icons/comment.svg'
import likeActiveIcon from '../../assets/icons/like-active.svg'
import likeDefaultIcon from '../../assets/icons/like-default.svg'
import type { ArticleCardProps } from '../../types/community'
import styles from './ArticleCard.module.css'

export function ArticleCard({ article, followed, liked }: ArticleCardProps) {
  return (
    <article className={styles.card}>
      <header className={styles.authorRow}>
        <div className={styles.authorInfo}>
          <img alt={`${article.author} 的头像`} className={styles.avatar} src={avatar} />
          <div className={styles.authorText}>
            <span className={styles.authorName}>{article.author}</span>
            <span className={styles.meta}>{article.meta}</span>
          </div>
        </div>

        <button
          aria-label={`${followed ? '取消关注' : '关注'} ${article.author}`}
          aria-pressed={followed}
          className={`${styles.followButton} ${followed ? styles.following : ''}`}
          type="button"
        >
          {followed ? '已关注' : '+ 关注'}
        </button>
      </header>

      <div className={styles.content}>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
      </div>

      <div className={styles.coverFrame}>
        <img alt={article.title} src={article.cover} />
      </div>

      <footer className={styles.interactions}>
        <button
          aria-label={`${liked ? '取消点赞' : '点赞'} ${article.title}`}
          aria-pressed={liked}
          className={`${styles.interactionButton} ${liked ? styles.liked : ''}`}
          type="button"
        >
          <img aria-hidden="true" src={liked ? likeActiveIcon : likeDefaultIcon} />
          <span>{article.likeCount}</span>
        </button>
        <button aria-label={`评论 ${article.title}`} className={styles.interactionButton} type="button">
          <img aria-hidden="true" src={commentIcon} />
          <span>{article.commentCount}</span>
        </button>
      </footer>
    </article>
  )
}
