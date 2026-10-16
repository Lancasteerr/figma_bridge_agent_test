import editIcon from '../assets/icons/publish-edit.svg'
import manageIcon from '../assets/icons/publish-manage.svg'
import styles from './PublishCard.module.css'

export function PublishCard() {
  return (
    <aside className={styles.card} aria-label="作品发布">
      <div className={styles.heading}>
        <span className={styles.title}>作品发布</span>
        <span className={styles.english}>POST</span>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.action}>
          <span className={styles.iconBox}>
            <img className={styles.editIcon} src={editIcon} alt="" aria-hidden="true" />
          </span>
          <span>发图文</span>
        </button>
        <button type="button" className={styles.action}>
          <span className={styles.iconBox}>
            <img className={styles.manageIcon} src={manageIcon} alt="" aria-hidden="true" />
          </span>
          <span>管理作品</span>
        </button>
      </div>
    </aside>
  )
}
