import { useState } from 'react'
import composeIcon from '../assets/icons/header-compose.svg'
import searchIcon from '../assets/icons/search.svg'
import avatar from '../assets/images/user-avatar.jpg'

/** 顶栏的内部定位直接对应 Figma 通用 Banner 组件。 */
export function SiteHeader() {
  const [query, setQuery] = useState('')

  return (
    <header className="site-header">
      <div className="site-header__content">
        <h1 className="site-title">Easy Community</h1>
        <div className="site-header__tools">
          <label className="search-box">
            <span className="sr-only">搜索社区内容</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索你感兴趣的内容"
              type="search"
            />
            <img src={searchIcon} alt="" aria-hidden="true" />
          </label>
          <div className="header-actions">
            <button className="compose-button" type="button" aria-label="发布中心">
              <img src={composeIcon} alt="" aria-hidden="true" />
            </button>
            <button className="avatar-button" type="button" aria-label="个人中心">
              <img src={avatar} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

