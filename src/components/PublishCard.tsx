import styles from './components.module.css'

export function PublishCard() {
  return (
    <aside className={styles.publishCard}>
      <div className={styles.sectionHeading}>
        <span>作品发布</span>
        <small>POST</small>
      </div>
      <div className={styles.publishActions}>
        <button type="button">
          <span className={`${styles.iconMask} ${styles.publishIcon}`} aria-hidden="true" />
          <span>发图文</span>
        </button>
        <button type="button">
          <span className={`${styles.iconMask} ${styles.inboxIcon}`} aria-hidden="true" />
          <span>管理作品</span>
        </button>
      </div>
    </aside>
  )
}
