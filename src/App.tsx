import { Fragment, useState } from 'react';
import { initialArticles } from './data/community';
import type { CategoryId } from './data/community';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { PublishCard } from './components/PublishCard';
import { ArticleItem } from './components/ArticleItem';
import { Toast } from './components/Toast';
import { useToast } from './hooks/useToast';

// 状态只保存在内存中；刷新恢复设计初始值，分类切换保留当前点赞与关注。
export function App() {
  const [selected, setSelected] = useState<CategoryId>('recommended');
  const [articles, setArticles] = useState(initialArticles);
  const { message, notify } = useToast();
  const toggleLike = (id: string) => setArticles((current) => current.map((article) =>
    article.id === id ? {
      ...article,
      liked: !article.liked,
      likes: article.likes + (article.liked ? -1 : 1),
    } : article,
  ));
  const toggleFollow = (id: string) => setArticles((current) => current.map((article) =>
    article.id === id ? { ...article, following: !article.following } : article,
  ));
  return (
    <div className="community-page">
      <div className="page-background" aria-hidden="true" />
      <Header notify={notify} />
      <div className="community-layout">
        <Sidebar selected={selected} onSelect={setSelected} />
        <main className="content-column" aria-label="社区文章">
          <img className="hero-banner" data-figma="84:694" src="/assets/banner.png" alt="社区精选横幅" width={681} height={229} />
          <div className="article-feed" data-figma="84:709">
            {articles.map((article, index) => <Fragment key={article.id}>
              {index > 0 && <div className="article-divider" aria-hidden="true" />}
              <ArticleItem article={article} onLike={() => toggleLike(article.id)}
                onFollow={() => toggleFollow(article.id)} notify={notify} />
            </Fragment>)}
          </div>
        </main>
        <PublishCard notify={notify} />
      </div>
      <Toast message={message} />
    </div>
  );
}
