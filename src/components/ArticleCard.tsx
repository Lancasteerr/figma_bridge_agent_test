import { useState } from 'react'
import avatar from '../assets/images/avatar.jpg'
import commentIcon from '../assets/icons/comment.svg'
import likeDefaultIcon from '../assets/icons/like-default.svg'
import likeLikedIcon from '../assets/icons/like-liked.svg'
import type { Article, ArticleInteractionState } from '../types/community'
import { formatCompactCount } from '../utils/formatCount'
import styles from './ArticleCard.module.css'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const [interaction, setInteraction] = useState<ArticleInteractionState>({
    following: article.initialFollowing,
    liked: article.initialLiked,
    likeCount: article.likeCount,
  })

  const toggleFollowing = () => {
    setInteraction((current) => ({ ...current, following: !current.following }))
  }

  const toggleLiked = () => {
    setInteraction((current) => ({
      ...current,
      liked: !current.liked,
      likeCount: current.likeCount + (current.liked ? -1 : 1),
    }))
  }

  return (
    <article className={styles.card}>
      <header className={styles.authorRow}>
        <div className={styles.authorInfo}>
          <img className={styles.avatar} src={avatar} alt="" />
          <div className={styles.authorText}>
            <span className={styles.authorName}>{article.authorName}</span>
            <span className={styles.authorMeta}>{article.authorMeta}</span>
          </div>
        </div>
        <button
          type="button"
          className={`${styles.followButton} ${interaction.following ? styles.following : ''}`}
          aria-pressed={interaction.following}
          onClick={toggleFollowing}
        >
          {interaction.following ? '已关注' : '+ 关注'}
        </button>
      </header>

      <div className={styles.content}>
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
      </div>

      <div className={styles.coverFrame}>
        <img src={article.cover} alt={article.coverAlt} />
      </div>

      <footer className={styles.engagement}>
        <button
          type="button"
          className={`${styles.engagementButton} ${interaction.liked ? styles.liked : ''}`}
          aria-label={`${interaction.liked ? '取消点赞' : '点赞'}，当前 ${formatCompactCount(interaction.likeCount)}`}
          aria-pressed={interaction.liked}
          onClick={toggleLiked}
        >
          <span className={styles.engagementIcon}>
            <img src={interaction.liked ? likeLikedIcon : likeDefaultIcon} alt="" aria-hidden="true" />
          </span>
          <span>{formatCompactCount(interaction.likeCount)}</span>
        </button>
        <button type="button" className={styles.engagementButton} aria-label={`评论，当前 ${article.commentCount}`}>
          <span className={styles.engagementIcon}>
            <img src={commentIcon} alt="" aria-hidden="true" />
          </span>
          <span>{article.commentCount}</span>
        </button>
      </footer>
    </article>
  )
}
