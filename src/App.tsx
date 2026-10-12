import { useState } from 'react'
import heroBanner from './assets/images/hero-banner.png'
import { ArticleFeed } from './components/ArticleFeed'
import { PublishPanel } from './components/PublishPanel'
import { SidebarNav } from './components/SidebarNav'
import { SiteHeader } from './components/SiteHeader'
import { articles } from './data/articles'
import './styles/global.css'
import type { NavKey } from './types/community'

function createInitialState(field: 'initiallyFollowing' | 'initiallyLiked') {
  return Object.fromEntries(articles.map((article) => [article.id, article[field]]))
}

export default function App() {
  const [activeNav, setActiveNav] = useState<NavKey>('recommended')
  const [query, setQuery] = useState('')
  const [following, setFollowing] = useState(() => createInitialState('initiallyFollowing'))
  const [liked, setLiked] = useState(() => createInitialState('initiallyLiked'))
  const [likeCounts, setLikeCounts] = useState(() =>
    Object.fromEntries(articles.map((article) => [article.id, article.likeCount])),
  )

  const toggleFollow = (id: string) => {
    setFollowing((current) => ({ ...current, [id]: !current[id] }))
  }

  const toggleLike = (id: string) => {
    setLiked((current) => {
      const nextLiked = !current[id]
      setLikeCounts((counts) => ({ ...counts, [id]: counts[id] + (nextLiked ? 1 : -1) }))
      return { ...current, [id]: nextLiked }
    })
  }

  return (
    <main className="community-page">
      <div className="page-shell">
        <SiteHeader query={query} onQueryChange={setQuery} />
        <div className="home-grid">
          <SidebarNav activeItem={activeNav} onSelect={setActiveNav} />
          <div className="content-column">
            <img className="hero-banner" src={heroBanner} alt="" />
            <ArticleFeed
              articles={articles}
              following={following}
              liked={liked}
              likeCounts={likeCounts}
              onToggleFollow={toggleFollow}
              onToggleLike={toggleLike}
            />
          </div>
          <PublishPanel />
        </div>
      </div>
    </main>
  )
}
