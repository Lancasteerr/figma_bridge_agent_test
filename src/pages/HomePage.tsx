import { useState } from 'react'
import heroBanner from '../assets/images/hero-banner.png'
import { ArticleFeed } from '../components/ArticleFeed'
import { PublishCard } from '../components/PublishCard'
import { SidebarNav } from '../components/SidebarNav'
import { SiteHeader } from '../components/SiteHeader'
import { articles, navItems } from '../data/community'
import type { NavId } from '../types/community'
import styles from './HomePage.module.css'

// 页面使用固定 1440px 画布，完整对应 Figma 的桌面稿坐标系。
export function HomePage() {
  const [activeNav, setActiveNav] = useState<NavId>('recommended')
  const [searchValue, setSearchValue] = useState('')

  return (
    <main className={styles.page} aria-label="Easy Community 社区主页">
      <div className={styles.headerWrap}>
        <SiteHeader searchValue={searchValue} onSearchChange={setSearchValue} />
      </div>
      <div className={styles.layout}>
        <SidebarNav items={navItems} activeItem={activeNav} onSelect={setActiveNav} />
        <div className={styles.centerColumn}>
          <img className={styles.hero} src={heroBanner} alt="" aria-hidden="true" data-visual-region="hero" />
          <ArticleFeed articles={articles} />
        </div>
        <PublishCard />
      </div>
    </main>
  )
}
