import commentIcon from '../assets/icons/comment.svg'
import likeIcon from '../assets/icons/like.svg'
import avatar from '../assets/images/user-avatar.jpg'
import type { Article } from '../types/community'
import { MaskIcon } from './MaskIcon'

interface ArticleCardProps {
  article: Article
  following: boolean
  liked: boolean
  likeCount: number
  onToggleFollow: () => void
  onToggleLike: () => void
}

function formatCount(value: number) {
  return value >= 10_000 ? `${(value / 1000).toFixed(1)}k` : value.toLocaleString('en-US')
}

export function ArticleCard({
  article,
  following,
  liked,
  likeCount,
  onToggleFollow,
  onToggleLike,
}: ArticleCardProps) {
  return (
    <article className="article-card">
      <header className="article-card__author-row">
        <div className="article-card__author">
          <img src={avatar} alt="" />
          <div>
            <strong>{article.author}</strong>
            <span>{article.meta}</span>
          </div>
        </div>
        <button
          className={`follow-button${following ? ' follow-button--active' : ''}`}
          type="button"
          aria-pressed={following}
          onClick={onToggleFollow}
        >
          {following ? '已关注' : '+ 关注'}
        </button>
      </header>

      <div className="article-card__copy">
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
      </div>

      <img className="article-card__cover" src={article.cover} alt="" />

      <footer className="article-card__actions">
        <button
          className={`engagement-button${liked ? ' engagement-button--active' : ''}`}
          type="button"
          aria-label={`点赞，当前 ${formatCount(likeCount)}`}
          aria-pressed={liked}
          onClick={onToggleLike}
        >
          <MaskIcon src={likeIcon} size={20} />
          <span>{formatCount(likeCount)}</span>
        </button>
        <button className="engagement-button" type="button" aria-label={`评论 ${article.commentCount}`}>
          <MaskIcon src={commentIcon} size={20} />
          <span>{article.commentCount}</span>
        </button>
      </footer>
    </article>
  )
}
