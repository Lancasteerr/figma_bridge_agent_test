import { IconMask } from '../IconMask/IconMask'
import type { NavItem, NavigationId } from '../../types/community'
import styles from './SidebarNav.module.css'

interface SidebarNavProps {
  items: NavItem[]
  activeId: NavigationId
  onSelect: (id: NavigationId) => void
}

export function SidebarNav({ items, activeId, onSelect }: SidebarNavProps) {
  return (
    <aside className={styles.sidebar} aria-label="首页频道导航">
      <div className={styles.headingBlock}>
        <div className={styles.heading}>
          <span className={styles.headingPrimary}>首页</span>
          <span className={styles.headingSecondary}>INDEX</span>
        </div>
        <span aria-hidden="true" className={styles.headingLine} />
      </div>

      <nav className={styles.navigation}>
        {items.map((item) => {
          const active = item.id === activeId
          return (
            <button
              aria-current={active ? 'page' : undefined}
              className={`${styles.navItem} ${active ? styles.active : ''}`}
              key={item.id}
              onClick={() => onSelect(item.id)}
              type="button"
            >
              {active && <span aria-hidden="true" className={styles.activeLine} />}
              <span className={styles.navContent}>
                <IconMask source={item.icon} size={30} />
                <span>{item.label}</span>
              </span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
