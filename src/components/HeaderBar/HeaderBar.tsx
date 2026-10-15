import avatar from '../../assets/images/avatar.jpg'
import editIcon from '../../assets/icons/header-edit.svg'
import searchIcon from '../../assets/icons/search.svg'
import styles from './HeaderBar.module.css'

interface HeaderBarProps {
  searchValue: string
  onSearchChange: (value: string) => void
}

export function HeaderBar({ searchValue, onSearchChange }: HeaderBarProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Easy Community</h1>

        <div className={styles.tools}>
          <div className={styles.searchFrame}>
            <label className={styles.searchBox}>
              <span className={styles.visuallyHidden}>搜索社区内容</span>
              <input
                aria-label="搜索社区内容"
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="搜索你感兴趣的内容"
                type="search"
                value={searchValue}
              />
              <img aria-hidden="true" className={styles.searchIcon} src={searchIcon} />
            </label>
          </div>

          <div className={styles.accountTools}>
            <button aria-label="进入发布中心" className={styles.publishButton} type="button">
              <img aria-hidden="true" src={editIcon} />
            </button>
            <button aria-label="进入个人中心" className={styles.avatarButton} type="button">
              <img alt="Flame 的头像" src={avatar} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
