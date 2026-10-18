import { Fragment } from 'react';
import { initialArticles } from './data/community';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { PublishCard } from './components/PublishCard';
import { ArticleItem } from './components/ArticleItem';

// 页面装配保持数据与展示分离，交互状态在下一阶段集中管理。
export function App() {
  const noop = () => {};
  return (
    <div className="community-page">
      <div className="page-background" aria-hidden="true" />
      <Header notify={noop} />
      <div className="community-layout">
        <Sidebar selected="recommended" onSelect={noop} />
        <main className="content-column" aria-label="社区文章">
          <img className="hero-banner" data-figma="84:694" src="/assets/banner.png" alt="社区精选横幅" width={681} height={229} />
          <div className="article-feed" data-figma="84:709">
            {initialArticles.map((article, index) => <Fragment key={article.id}>
              {index > 0 && <div className="article-divider" aria-hidden="true" />}
              <ArticleItem article={article} onLike={noop} onFollow={noop} notify={noop} />
            </Fragment>)}
          </div>
        </main>
        <PublishCard notify={noop} />
      </div>
    </div>
  );
}
