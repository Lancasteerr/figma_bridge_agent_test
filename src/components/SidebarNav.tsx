import type { NavKey } from '../types/community'
import styles from './components.module.css'

interface SidebarNavProps {
  active: NavKey
  onChange: (key: NavKey) => void
}

const navItems: Array<{ key: NavKey; label: string; icon: string }> = [
  { key: 'recommended', label: '推荐', icon: '›_' },
  { key: 'popular', label: '热门', icon: '↗' },
  { key: 'following', label: '关注', icon: '◉' },
]

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
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
