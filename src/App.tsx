import heroBanner from './assets/hero-banner.png'
import { ArticleFeed } from './components/ArticleFeed'
import { Header } from './components/Header'
import { PublishCard } from './components/PublishCard'
import { Sidebar } from './components/Sidebar'
import { articles } from './data/articles'

const initialArticleStates = Object.fromEntries(
  articles.map((article) => [
    article.id,
    {
      following: article.initiallyFollowing,
      liked: article.initiallyLiked,
      likeLabel: article.likeLabel,
    },
  ]),
)

/** 首页使用 1440px 固定画布，以保持与 Figma 相同的几何关系。 */
export function App() {
  return (
    <main className="app-shell">
      <Header onSearchChange={() => undefined} searchValue="" />
      <Sidebar activeKey="recommended" onSelect={() => undefined} />
      <img alt="" className="hero-banner" src={heroBanner} />
      <PublishCard />
      <ArticleFeed
        articles={articles}
        onToggleFollow={() => undefined}
        onToggleLike={() => undefined}
        states={initialArticleStates}
      />
    </main>
  )
}
