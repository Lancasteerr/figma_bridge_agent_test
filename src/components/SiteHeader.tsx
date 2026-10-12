import headerComposeIcon from '../assets/icons/header-compose.svg'
import searchIcon from '../assets/icons/search.svg'
import avatar from '../assets/images/user-avatar.jpg'
import { MaskIcon } from './MaskIcon'

interface SiteHeaderProps {
  query: string
  onQueryChange: (value: string) => void
}

export function SiteHeader({ query, onQueryChange }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <h1 className="site-header__title">Easy Community</h1>
        <div className="site-header__tools">
          <label className="search-box">
            <span className="sr-only">搜索社区内容</span>
            <input
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="搜索你感兴趣的内容"
            />
            <MaskIcon src={searchIcon} size={16} className="search-box__icon" />
          </label>
          <div className="site-header__actions">
            <button className="compose-button" type="button" aria-label="进入发布中心">
              <MaskIcon src={headerComposeIcon} size={25} />
            </button>
            <img className="site-header__avatar" src={avatar} alt="当前用户头像" />
          </div>
        </div>
      </div>
    </header>
  )
}
