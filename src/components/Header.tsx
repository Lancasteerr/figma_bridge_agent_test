import composeIcon from '../assets/icons/compose.svg'
import searchIcon from '../assets/icons/search.svg'
import avatarImage from '../assets/user-avatar.jpg'
import { MaskIcon } from './MaskIcon'

interface HeaderProps {
  searchValue: string
  onSearchChange: (value: string) => void
}

/** 页面顶部通栏，保留 Figma 中标题、搜索和用户入口的固定几何关系。 */
export function Header({ searchValue, onSearchChange }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <h1 className="site-header__title">Easy Community</h1>
        <div className="site-header__tools">
          <label className="search-field">
            <span className="sr-only">搜索社区内容</span>
            <input
              aria-label="搜索社区内容"
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="搜索你感兴趣的内容"
              type="search"
              value={searchValue}
            />
            <MaskIcon className="search-field__icon" src={searchIcon} />
          </label>
          <div className="site-header__profile-tools">
            <button aria-label="发布内容" className="round-action" type="button">
              <MaskIcon className="round-action__icon" src={composeIcon} />
            </button>
            <img alt="Flame 的头像" className="site-header__avatar" src={avatarImage} />
          </div>
        </div>
      </div>
    </header>
  )
}
