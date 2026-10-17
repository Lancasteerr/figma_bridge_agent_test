import commentDefault from '../assets/icons/comment-default.svg'
import commentHover from '../assets/icons/comment-hover.svg'
import likeDefault from '../assets/icons/like-default.svg'
import likeHover from '../assets/icons/like-hover.svg'
import likeLiked from '../assets/icons/like-liked.svg'
import styles from './ArticleActions.module.css'

interface ArticleActionsProps {
  liked: boolean
  likeCount: string
  commentCount: string
  onToggleLike?: () => void
}

// 计数来自文章数据，切换状态时只替换 Figma 定义的视觉资源。
export function ArticleActions({ liked, likeCount, commentCount, onToggleLike }: ArticleActionsProps) {
  return (
    <div className={styles.actions}>
      <button
        className={`${styles.actionButton} ${styles.likeButton} ${liked ? styles.liked : ''}`}
        type="button"
        aria-label={liked ? `取消点赞，当前 ${likeCount}` : `点赞，当前 ${likeCount}`}
        aria-pressed={liked}
        onClick={onToggleLike}
      >
        <span className={styles.iconStack} aria-hidden="true">
          <img className={styles.defaultIcon} src={liked ? likeLiked : likeDefault} alt="" />
          {!liked && <img className={styles.hoverIcon} src={likeHover} alt="" />}
        </span>
        <span>{likeCount}</span>
      </button>
      <button className={`${styles.actionButton} ${styles.commentButton}`} type="button" aria-label={`评论，当前 ${commentCount}`}>
        <span className={styles.iconStack} aria-hidden="true">
          <img className={styles.defaultIcon} src={commentDefault} alt="" />
          <img className={styles.hoverIcon} src={commentHover} alt="" />
        </span>
        <span>{commentCount}</span>
      </button>
    </div>
  )
}
