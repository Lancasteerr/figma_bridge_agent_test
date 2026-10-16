import followingIcon from '../assets/icons/sidebar-following.svg'
import hotIcon from '../assets/icons/sidebar-hot.svg'
import recommendIcon from '../assets/icons/sidebar-recommend.svg'
import type { NavKey } from '../types/community'
import styles from './SidebarNav.module.css'

interface SidebarNavProps {
  activeKey: NavKey
  onChange: (key: NavKey) => void
}

const items: Array<{ key: NavKey; label: string; icon: string }> = [
  { key: 'recommend', label: '推荐', icon: recommendIcon },
  { key: 'hot', label: '热门', icon: hotIcon },
  { key: 'following', label: '关注', icon: followingIcon },
]

export function SidebarNav({ activeKey, onChange }: SidebarNavProps) {
  return (
    <aside className={styles.sidebar} aria-label="首页分类">
      <div className={styles.titleRow}>
        <span className={styles.title}>首页</span>
        <span className={styles.english}>INDEX</span>
      </div>

      <nav className={styles.nav} aria-label="内容分类">
        {items.map((item) => {
          const isActive = item.key === activeKey

          return (
            <button
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              key={item.key}
              type="button"
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onChange(item.key)}
            >
              <span className={styles.iconBox}>
                <img src={item.icon} alt="" aria-hidden="true" />
              </span>
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
