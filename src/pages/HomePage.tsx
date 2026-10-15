import { useState, type Dispatch, type SetStateAction } from 'react'
import heroImage from '../assets/images/hero.png'
import { ArticleFeed } from '../components/ArticleFeed/ArticleFeed'
import { HeaderBar } from '../components/HeaderBar/HeaderBar'
import { PublishPanel } from '../components/PublishPanel/PublishPanel'
import { SidebarNav } from '../components/SidebarNav/SidebarNav'
import { articles, navigationItems } from '../data/community'
import type { NavigationId } from '../types/community'
import styles from './HomePage.module.css'

function createArticleState(key: 'initialFollowed' | 'initialLiked') {
  return Object.fromEntries(articles.map((article) => [article.id, article[key]]))
}

export function HomePage() {
  const [searchValue, setSearchValue] = useState('')
  const [activeNav, setActiveNav] = useState<NavigationId>('recommended')
  const [followedById, setFollowedById] = useState<Record<string, boolean>>(() =>
    createArticleState('initialFollowed'),
  )
  const [likedById, setLikedById] = useState<Record<string, boolean>>(() =>
    createArticleState('initialLiked'),
  )

  // 各文章以 id 独立记录交互状态，避免一篇文章的操作影响另一篇。
  const toggleArticleState = (
    setter: Dispatch<SetStateAction<Record<string, boolean>>>,
    articleId: string,
  ) => {
    setter((current) => ({ ...current, [articleId]: !current[articleId] }))
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <HeaderBar onSearchChange={setSearchValue} searchValue={searchValue} />

        <div className={styles.columns}>
          <SidebarNav activeId={activeNav} items={navigationItems} onSelect={setActiveNav} />

          <div className={styles.centerColumn}>
            <img alt="社区首页推荐视觉" className={styles.hero} src={heroImage} />
            <ArticleFeed
              articles={articles}
              followedById={followedById}
              likedById={likedById}
              onToggleFollow={(articleId) => toggleArticleState(setFollowedById, articleId)}
              onToggleLike={(articleId) => toggleArticleState(setLikedById, articleId)}
            />
          </div>

          <PublishPanel />
        </div>
      </div>
    </main>
  )
}
