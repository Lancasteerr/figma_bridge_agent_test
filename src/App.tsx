import { useState } from 'react'
import heroBanner from './assets/hero-banner.png'
import { ArticleFeed, type ArticleViewState } from './components/ArticleFeed'
import { Header } from './components/Header'
import { PublishCard } from './components/PublishCard'
import { Sidebar, type NavigationKey } from './components/Sidebar'
import { articles } from './data/articles'

const initialArticleStates: Record<string, ArticleViewState> = Object.fromEntries(
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
  const [activeNavigation, setActiveNavigation] = useState<NavigationKey>('recommended')
  const [searchValue, setSearchValue] = useState('')
  const [articleStates, setArticleStates] = useState(initialArticleStates)

  /** 每篇文章维护独立关注状态，避免不同卡片互相影响。 */
  const toggleFollow = (articleId: string) => {
    setArticleStates((current) => ({
      ...current,
      [articleId]: {
        ...current[articleId],
        following: !current[articleId].following,
      },
    }))
  }

  /** 首篇文章展示精确增减数值，缩写计数保持设计文案不变。 */
  const toggleLike = (articleId: string) => {
    setArticleStates((current) => {
      const nextLiked = !current[articleId].liked
      const article = articles.find((item) => item.id === articleId)
      const likeLabel = article?.likeLabel === '328' && nextLiked ? '329' : article?.likeLabel ?? ''

      return {
        ...current,
        [articleId]: {
          ...current[articleId],
          liked: nextLiked,
          likeLabel,
        },
      }
    })
  }

  return (
    <main className="app-shell">
      <Header onSearchChange={setSearchValue} searchValue={searchValue} />
      <Sidebar activeKey={activeNavigation} onSelect={setActiveNavigation} />
      <img alt="" className="hero-banner" src={heroBanner} />
      <PublishCard />
      <ArticleFeed
        articles={articles}
        onToggleFollow={toggleFollow}
        onToggleLike={toggleLike}
        states={articleStates}
      />
    </main>
  )
}
