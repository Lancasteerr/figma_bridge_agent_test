import followingIcon from '../assets/icons/nav-following.svg'
import recommendIcon from '../assets/icons/nav-recommend.svg'
import trendingIcon from '../assets/icons/nav-trending.svg'
import type { NavItem, NavKey } from '../types/community'
import { MaskIcon } from './MaskIcon'

const navItems: NavItem[] = [
  { id: 'recommended', label: '推荐', icon: recommendIcon },
  { id: 'trending', label: '热门', icon: trendingIcon },
  { id: 'following', label: '关注', icon: followingIcon },
]

interface SidebarNavProps {
  activeItem: NavKey
  onSelect: (item: NavKey) => void
}

export function SidebarNav({ activeItem, onSelect }: SidebarNavProps) {
  return (
    <aside className="sidebar">
      <div className="section-title sidebar__title">
        <span>首页</span>
        <small>INDEX</small>
      </div>
      <nav className="sidebar__nav" aria-label="首页内容分类">
        {navItems.map((item) => {
          const active = activeItem === item.id
          return (
            <button
              key={item.id}
              className={`nav-item${active ? ' nav-item--active' : ''}`}
              type="button"
              aria-current={active ? 'page' : undefined}
              onClick={() => onSelect(item.id)}
            >
              <MaskIcon src={item.icon} size={30} className="nav-item__icon" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
