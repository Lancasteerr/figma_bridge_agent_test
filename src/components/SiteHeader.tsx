import headerEdit from '../assets/icons/header-edit.svg'
import searchIcon from '../assets/icons/search.svg'
import headerAvatar from '../assets/images/header-avatar.png'
import styles from './SiteHeader.module.css'

interface SiteHeaderProps {
  searchValue: string
  onSearchChange: (value: string) => void
}

// 顶栏保留输入语义，但不扩展设计稿之外的搜索或跳转行为。
export function SiteHeader({ searchValue, onSearchChange }: SiteHeaderProps) {
  return (
    <header className={styles.header} data-visual-region="header">
      <div className={styles.inner}>
        <h1 className={styles.brand}>Easy Community</h1>
        <div className={styles.tools}>
          <label className={styles.searchBox}>
            <span className={styles.visuallyHidden}>搜索社区内容</span>
            <input
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="搜索你感兴趣的内容"
              aria-label="搜索你感兴趣的内容"
            />
            <img src={searchIcon} alt="" aria-hidden="true" />
          </label>
          <div className={styles.profileTools}>
            <button className={styles.publishButton} type="button" aria-label="进入发布中心">
              <img src={headerEdit} alt="" aria-hidden="true" />
            </button>
            <button className={styles.avatarButton} type="button" aria-label="打开个人主页">
              <img src={headerAvatar} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
