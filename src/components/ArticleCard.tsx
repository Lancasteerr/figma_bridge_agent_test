import avatarImage from '../assets/user-avatar.jpg'
import commentIcon from '../assets/icons/comment.svg'
import likeIcon from '../assets/icons/like.svg'
import type { Article } from '../data/articles'
import { MaskIcon } from './MaskIcon'

interface ArticleCardProps {
  article: Article
  isFollowing: boolean
  isLiked: boolean
  likeLabel: string
  onToggleFollow: () => void
  onToggleLike: () => void
}

/** 关注按钮按照 Figma 的默认与已关注状态切换。 */
function FollowButton({ isFollowing, onToggle }: { isFollowing: boolean; onToggle: () => void }) {
  return (
    <button
      aria-pressed={isFollowing}
      className={`follow-button${isFollowing ? ' follow-button--following' : ''}`}
      onClick={onToggle}
      type="button"
    >
      {isFollowing ? '已关注' : '+ 关注'}
    </button>
  )
}

/** 点赞与评论共用 78×32 的互动按钮规格。 */
function ReactionButton({
  icon,
  label,
  isActive = false,
  accessibleName,
  onClick,
}: {
  icon: string
  label: string
  isActive?: boolean
  accessibleName: string
  onClick?: () => void
}) {
  return (
    <button
      aria-label={accessibleName}
      aria-pressed={onClick ? isActive : undefined}
      className={`reaction-button${isActive ? ' reaction-button--active' : ''}`}
      onClick={onClick}
      type="button"
    >
      <MaskIcon className="reaction-button__icon" src={icon} />
      <span>{label}</span>
    </button>
  )
}

/** 单篇文章卡片，内容与初始状态均由本地模型注入。 */
export function ArticleCard({
  article,
  isFollowing,
  isLiked,
  likeLabel,
  onToggleFollow,
  onToggleLike,
}: ArticleCardProps) {
  return (
    <article className="article-card">
      <header className="article-card__author-row">
        <div className="article-card__author">
          <img alt="" className="article-card__avatar" src={avatarImage} />
          <div className="article-card__author-copy">
            <strong>{article.author}</strong>
            <span>{article.meta}</span>
          </div>
        </div>
        <FollowButton isFollowing={isFollowing} onToggle={onToggleFollow} />
      </header>
      <div className="article-card__copy">
        <h2>{article.title}</h2>
        <p>{article.summary}</p>
      </div>
      <div className="article-card__cover-frame">
        <img alt="" className="article-card__cover" src={article.cover} />
      </div>
      <footer className="article-card__reactions">
        <ReactionButton
          accessibleName={`点赞 ${article.title}`}
          icon={likeIcon}
          isActive={isLiked}
          label={likeLabel}
          onClick={onToggleLike}
        />
        <ReactionButton accessibleName={`评论 ${article.title}`} icon={commentIcon} label={article.commentLabel} />
      </footer>
    </article>
  )
}
