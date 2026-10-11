import followingIcon from '../assets/icons/nav-following.svg'
import recommendIcon from '../assets/icons/nav-recommend.svg'
import trendingIcon from '../assets/icons/nav-trending.svg'
import type { NavItem, NavKey } from '../types/community'
import { MaskIcon } from './MaskIcon'

const navItems: NavItem[] = [
  { key: 'recommended', label: '推荐', icon: recommendIcon },
  { key: 'trending', label: '热门', icon: trendingIcon },
  { key: 'following', label: '关注', icon: followingIcon },
]

interface SidebarNavProps {
  activeKey: NavKey
  onChange: (key: NavKey) => void
}

/** 左侧导航复用同一选中态样式，避免为三个入口重复维护结构。 */
export function SidebarNav({ activeKey, onChange }: SidebarNavProps) {
  return (
    <aside className="sidebar-card">
      <div className="sidebar-heading">
        <div>
          <span>首页</span>
          <small>INDEX</small>
        </div>
      </div>
      <nav className="sidebar-nav" aria-label="主页内容分类">
        {navItems.map((item) => {
          const active = item.key === activeKey

          return (
            <button
              className={`sidebar-nav__item${active ? ' is-active' : ''}`}
              key={item.key}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(item.key)}
            >
              <MaskIcon src={item.icon} className="sidebar-nav__icon" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

