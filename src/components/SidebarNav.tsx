import type { NavKey } from '../types/community'
import styles from './components.module.css'

interface SidebarNavProps {
  active: NavKey
  onChange: (key: NavKey) => void
}

const navItems: Array<{ key: NavKey; label: string; icon: 'terminalIcon' | 'trendingIcon' | 'compassIcon' }> = [
  { key: 'recommended', label: '推荐', icon: 'terminalIcon' },
  { key: 'popular', label: '热门', icon: 'trendingIcon' },
  { key: 'following', label: '关注', icon: 'compassIcon' },
]

// 分类按钮只移动选中高光，不替换文章或横图内容。
export function SidebarNav({ active, onChange }: SidebarNavProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sectionHeading}>
        <span>首页</span>
        <small>INDEX</small>
      </div>
      <nav className={styles.navList} aria-label="首页内容分类">
        {navItems.map((item) => (
          <button
            className={styles.navItem}
            data-active={active === item.key}
            type="button"
            aria-pressed={active === item.key}
            onClick={() => onChange(item.key)}
            key={item.key}
          >
            <span className={`${styles.iconMask} ${styles.navIcon} ${styles[item.icon]}`} aria-hidden="true" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
