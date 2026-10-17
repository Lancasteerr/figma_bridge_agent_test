import styles from './components.module.css'

export function PublishCard() {
  return (
    <aside className={styles.publishCard}>
      <div className={styles.sectionHeading}>
        <span>作品发布</span>
        <small>POST</small>
      </div>
      <div className={styles.publishActions}>
        <button type="button"><b aria-hidden="true">✎</b><span>发图文</span></button>
        <button type="button"><b aria-hidden="true">▱</b><span>管理作品</span></button>
      </div>
    </aside>
  )
}
