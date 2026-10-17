import { useState } from 'react'
import styles from './App.module.css'
import { CenterFeed } from './components/CenterFeed'
import { PublishCard } from './components/PublishCard'
import { SidebarNav } from './components/SidebarNav'
import { TopBanner } from './components/TopBanner'
import { initialArticles } from './data/articles'
import type { Article, NavKey } from './types/community'

function App() {
  const [activeNav, setActiveNav] = useState<NavKey>('recommended')
  const [searchValue, setSearchValue] = useState('')
  const [articles, setArticles] = useState<Article[]>(initialArticles)

  // 所有交互只更新当前内存中的文章，不产生网络请求或持久化。
  const updateArticle = (id: string, update: (article: Article) => Article) => {
    setArticles((items) => items.map((article) => (article.id === id ? update(article) : article)))
  }

  return (
    <main className={styles.page}>
      <div className={styles.stage}>
        <TopBanner value={searchValue} onChange={setSearchValue} />
        <SidebarNav active={activeNav} onChange={setActiveNav} />
        <CenterFeed
          articles={articles}
          onToggleFollow={(id) =>
            updateArticle(id, (article) => ({ ...article, followed: !article.followed }))
          }
          onToggleLike={(id) =>
            updateArticle(id, (article) => ({
              ...article,
              liked: !article.liked,
              likes: article.likes + (article.liked ? -1 : 1),
            }))
          }
        />
        <PublishCard />
      </div>
    </main>
  )
}

export default App
