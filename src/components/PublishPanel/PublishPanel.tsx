import publishEditIcon from '../../assets/icons/publish-edit.svg'
import publishManageIcon from '../../assets/icons/publish-manage.svg'
import styles from './PublishPanel.module.css'

export function PublishPanel() {
  return (
    <aside className={styles.panel} aria-label="作品发布">
      <div className={styles.headingBlock}>
        <div className={styles.heading}>
          <span className={styles.headingPrimary}>作品发布</span>
          <span className={styles.headingSecondary}>POST</span>
        </div>
        <span aria-hidden="true" className={styles.headingLine} />
      </div>

      <div className={styles.actions}>
        <button className={styles.action} type="button">
          <img aria-hidden="true" src={publishEditIcon} />
          <span>发图文</span>
        </button>
        <button className={styles.action} type="button">
          <img aria-hidden="true" src={publishManageIcon} />
          <span>管理作品</span>
        </button>
      </div>
    </aside>
  )
}
