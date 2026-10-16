import heroBanner from '../assets/images/hero-banner.png'
import { ArticleFeed } from '../components/ArticleFeed'
import { PublishCard } from '../components/PublishCard'
import { SidebarNav } from '../components/SidebarNav'
import { SiteHeader } from '../components/SiteHeader'
import { articles } from '../data/articles'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <>
      <div className={styles.background} aria-hidden="true" />
      <main className={styles.page} aria-label="Easy Community 首页">
        <SiteHeader />
        <SidebarNav activeKey="recommend" onChange={() => undefined} />
        <img className={styles.hero} src={heroBanner} alt="明日方舟主题社区横幅" />
        <PublishCard />
        <ArticleFeed articles={articles} />
      </main>
    </>
  )
}
