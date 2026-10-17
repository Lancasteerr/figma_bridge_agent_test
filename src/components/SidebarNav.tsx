import type { NavId, NavItem } from '../types/community'
import { SectionTitle } from './SectionTitle'
import styles from './SidebarNav.module.css'

interface SidebarNavProps {
  items: NavItem[]
  activeItem: NavId
  onSelect?: (id: NavId) => void
}

// 所有导航项共用一种结构，选中态只改变 Figma 已定义的视觉层。
export function SidebarNav({ items, activeItem, onSelect }: SidebarNavProps) {
  return (
    <aside className={styles.sidebar} aria-label="首页导航" data-visual-region="sidebar">
      <div className={styles.titleArea}>
        <SectionTitle title="首页" suffix="INDEX" lineWidth={80} />
      </div>
      <nav className={styles.navList}>
        {items.map((item) => {
          const active = item.id === activeItem
          return (
            <button
              key={item.id}
              className={`${styles.navItem} ${active ? styles.active : ''}`}
              type="button"
              aria-current={active ? 'page' : undefined}
              onClick={() => onSelect?.(item.id)}
            >
              <span className={styles.selectionRail} aria-hidden="true" />
              <img src={item.icon} alt="" aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
