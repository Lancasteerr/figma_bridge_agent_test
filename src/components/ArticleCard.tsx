import { useState } from 'react'
import commentIcon from '../assets/icons/comment.svg'
import likeIcon from '../assets/icons/like.svg'
import avatar from '../assets/images/user-avatar.jpg'
import type { ArticleData } from '../types/community'
import { MaskIcon } from './MaskIcon'

interface ArticleCardProps {
  article: ArticleData
}

/** 文章卡片独立维护关注和点赞状态，刷新页面后恢复设计稿初始值。 */
export function ArticleCard({ article }: ArticleCardProps) {
  const [following, setFollowing] = useState(article.initialFollowing)
  const [liked, setLiked] = useState(article.initialLiked)

  const likeLabel = article.keepCompactLikeLabel
    ? article.likesLabel
    : String(article.likes + (liked ? 1 : 0))

  return (
    <article className="article-card">
      <header className="article-author-row">
        <div className="article-author">
          <img src={avatar} alt="" />
          <div>
            <strong>{article.author}</strong>
            <span>{article.meta}</span>
          </div>
        </div>
        <button
          className={`follow-button${following ? ' is-following' : ''}`}
          type="button"
          aria-pressed={following}
          onClick={() => setFollowing((current) => !current)}
        >
          {following ? '已关注' : '+ 关注'}
        </button>
      </header>

      <div className="article-copy">
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
      </div>

      <div className="article-cover">
        <img src={article.cover} alt="" />
      </div>

      <footer className="article-actions">
        <button
          className={`reaction-button${liked ? ' is-liked' : ''}`}
          type="button"
          aria-label={`点赞 ${likeLabel}`}
          aria-pressed={liked}
          onClick={() => setLiked((current) => !current)}
        >
          <MaskIcon src={likeIcon} />
          <span>{likeLabel}</span>
        </button>
        <button
          className="reaction-button comment-button"
          type="button"
          aria-label={`评论 ${article.commentsLabel}`}
        >
          <MaskIcon src={commentIcon} />
          <span>{article.commentsLabel}</span>
        </button>
      </footer>
    </article>
  )
}

