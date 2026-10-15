import heroImage from '../assets/images/hero.png'
import { ArticleFeed } from '../components/ArticleFeed/ArticleFeed'
import { HeaderBar } from '../components/HeaderBar/HeaderBar'
import { PublishPanel } from '../components/PublishPanel/PublishPanel'
import { SidebarNav } from '../components/SidebarNav/SidebarNav'
import { articles, navigationItems } from '../data/community'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <HeaderBar />

        <div className={styles.columns}>
          <SidebarNav activeId="recommended" items={navigationItems} />

          <div className={styles.centerColumn}>
            <img alt="社区首页推荐视觉" className={styles.hero} src={heroImage} />
            <ArticleFeed articles={articles} />
          </div>

          <PublishPanel />
        </div>
      </div>
    </main>
  )
}
