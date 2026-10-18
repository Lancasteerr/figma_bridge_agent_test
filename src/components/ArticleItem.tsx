import type { Article } from '../data/community';
import { Icon } from './Icon';

interface FollowButtonProps {
  following: boolean;
  onToggle: () => void;
}

// 按钮宽高固定，切换文案时不会推移作者信息。
export function FollowButton({ following, onToggle }: FollowButtonProps) {
  return <button type="button" className="follow-button" aria-pressed={following}
    aria-label={following ? '取消关注作者' : '关注作者'} onClick={onToggle}>
    {following ? '已关注' : '+ 关注'}
  </button>;
}

interface InteractionButtonProps {
  kind: 'like' | 'comment';
  count: number;
  selected?: boolean;
  onClick: () => void;
}

// 点赞与评论共享尺寸和间距；只有点赞公开可切换的按下状态。
export function InteractionButton({ kind, count, selected, onClick }: InteractionButtonProps) {
  const formatted = count >= 10000 ? `${(count / 1000).toFixed(1)}k` : String(count);
  return (
    <button type="button" className={`interaction-button ${kind}-button`}
      aria-label={kind === 'like' ? (selected ? '取消点赞' : '点赞') : '评论'}
      aria-pressed={kind === 'like' ? selected : undefined} onClick={onClick}>
      <Icon name={kind} size={20} /><span>{formatted}</span>
    </button>
  );
}

interface ArticleItemProps {
  article: Article;
  onLike: () => void;
  onFollow: () => void;
  notify: (message: string) => void;
}

// 保留 610px 条目高度、104px 正文区及 631px 封面裁切容器，形成连续内容流。
export function ArticleItem({ article, onLike, onFollow, notify }: ArticleItemProps) {
  const openArticle = () => notify('文章详情：仅作前端展示');
  return (
    <article className="article-item" data-figma={article.id} aria-label={article.title}>
      <div className="author-row">
        <div className="author-info">
          <img className="author-avatar" src="/assets/avatar.jpg" alt="" width={36} height={36} />
          <div className="author-text">
            <span className="author-name">{article.author}</span>
            <span className="article-metadata">{article.metadata}</span>
          </div>
        </div>
        <FollowButton following={article.following} onToggle={onFollow} />
      </div>
      <div className="article-content">
        <h2 className="article-title"><button type="button" onClick={openArticle}>{article.title}</button></h2>
        <p className="article-summary">{article.summary}</p>
      </div>
      <button type="button" className="article-cover" aria-label={`查看文章：${article.title}`} onClick={openArticle}>
        <img className={`cover-image cover-${article.coverSide}`} src={article.cover} alt="" width={633} height={356} />
      </button>
      <div className="article-interactions">
        <InteractionButton kind="like" count={article.likes} selected={article.liked} onClick={onLike} />
        <InteractionButton kind="comment" count={article.comments} onClick={() => notify('评论：仅作前端展示')} />
      </div>
    </article>
  );
}
