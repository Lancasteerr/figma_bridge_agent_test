import styles from './components.module.css'

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
          <span aria-hidden="true">⌕</span>
        </label>
        <button className={styles.headerAction} type="button" aria-label="发布中心">
          ✎
        </button>
        <button className={styles.avatarPlaceholder} type="button" aria-label="用户头像" />
      </div>
    </header>
  )
}
