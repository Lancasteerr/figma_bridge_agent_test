import styles from './components.module.css'
import avatar from '../assets/figma/avatar.jpg'

interface TopBannerProps {
  value: string
  onChange: (value: string) => void
}

export function TopBanner({ value, onChange }: TopBannerProps) {
  return (
    <header className={styles.topBanner}>
      <h1>Easy Community</h1>
      <div className={styles.bannerActions}>
        <label className={styles.searchField}>
          <span className={styles.visuallyHidden}>搜索内容</span>
          <input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="搜索你感兴趣的内容"
          />
          <span className={`${styles.iconMask} ${styles.searchIcon}`} aria-hidden="true" />
        </label>
        <button className={styles.headerAction} type="button" aria-label="发布中心">
          <span className={`${styles.iconMask} ${styles.headerEditIcon}`} aria-hidden="true" />
        </button>
        <button className={styles.avatarButton} type="button" aria-label="用户头像">
          <img src={avatar} alt="" />
        </button>
      </div>
    </header>
  )
}
