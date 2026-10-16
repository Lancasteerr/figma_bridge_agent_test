import { useState } from 'react'
import avatar from '../assets/images/avatar.jpg'
import editIcon from '../assets/icons/header-edit.svg'
import searchIcon from '../assets/icons/search.svg'
import styles from './SiteHeader.module.css'

export function SiteHeader() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>Easy Community</h1>

      <div className={styles.actions}>
        <label className={styles.searchBox}>
          <span className={styles.visuallyHidden}>搜索社区内容</span>
          <input
            type="search"
            value={searchValue}
            placeholder="搜索你感兴趣的内容"
            aria-label="搜索社区内容"
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <img src={searchIcon} alt="" aria-hidden="true" />
        </label>

        <div className={styles.userActions}>
          <button className={styles.publishButton} type="button" aria-label="进入发布中心">
            <img src={editIcon} alt="" aria-hidden="true" />
          </button>
          <img className={styles.avatar} src={avatar} alt="当前用户头像" />
        </div>
      </div>
    </header>
  )
}
