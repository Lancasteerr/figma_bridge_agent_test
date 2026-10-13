import followingIcon from '../assets/icons/nav-following.svg'
import recommendedIcon from '../assets/icons/nav-recommended.svg'
import trendingIcon from '../assets/icons/nav-trending.svg'
import { MaskIcon } from './MaskIcon'

export type NavigationKey = 'recommended' | 'trending' | 'following'

interface NavigationItem {
  key: NavigationKey
  label: string
  icon: string
}

interface SidebarProps {
  activeKey: NavigationKey
  onSelect: (key: NavigationKey) => void
}

const navigationItems: NavigationItem[] = [
  { key: 'recommended', label: '推荐', icon: recommendedIcon },
  { key: 'trending', label: '热门', icon: trendingIcon },
  { key: 'following', label: '关注', icon: followingIcon },
]

/** 首页左侧导航，状态变化只影响选中视觉，不请求远端数据。 */
export function Sidebar({ activeKey, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar__heading">
        <div className="sidebar__heading-copy">
          <span>首页</span>
          <small>INDEX</small>
        </div>
      </div>
      <nav aria-label="首页内容分类" className="sidebar__navigation">
        {navigationItems.map((item) => {
          const isActive = item.key === activeKey

          return (
            <button
              aria-current={isActive ? 'page' : undefined}
              className={`sidebar__item${isActive ? ' sidebar__item--active' : ''}`}
              key={item.key}
              onClick={() => onSelect(item.key)}
              type="button"
            >
              <MaskIcon className="sidebar__item-icon" src={item.icon} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
