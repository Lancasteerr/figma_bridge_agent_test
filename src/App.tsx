import { useState } from 'react'
import heroBanner from './assets/images/hero-banner.png'
import { ArticleFeed } from './components/ArticleFeed'
import { PublishPanel } from './components/PublishPanel'
import { SidebarNav } from './components/SidebarNav'
import { SiteHeader } from './components/SiteHeader'
import { articles } from './data/articles'
import type { NavKey } from './types/community'

/**
 * 主页严格使用 Figma 的 1440px 桌面画布；交互状态只保存在当前浏览器会话中。
 */
export function App() {
  const [activeNav, setActiveNav] = useState<NavKey>('recommended')

  return (
    <main className="community-page">
      <SiteHeader />
      <section className="home-grid" aria-label="社区主页内容">
        <SidebarNav activeKey={activeNav} onChange={setActiveNav} />
        <div className="content-column">
          <img
            className="hero-banner"
            src={heroBanner}
            alt="城市街景中的角色插画"
          />
          <ArticleFeed articles={articles} />
        </div>
        <PublishPanel />
      </section>
    </main>
  )
}

