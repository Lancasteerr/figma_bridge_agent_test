import publishEdit from '../assets/icons/publish-edit.svg'
import publishManage from '../assets/icons/publish-manage.svg'
import { SectionTitle } from './SectionTitle'
import styles from './PublishCard.module.css'

// 发布卡只呈现设计稿入口，不模拟未定义的发布与管理流程。
export function PublishCard() {
  return (
    <aside className={styles.card} aria-label="作品发布" data-visual-region="publish">
      <div className={styles.titleArea}>
        <SectionTitle title="作品发布" suffix="POST" lineWidth={111} />
      </div>
      <div className={styles.actions}>
        <button type="button" aria-label="发图文">
          <img src={publishEdit} alt="" aria-hidden="true" />
          <span>发图文</span>
        </button>
        <button type="button" aria-label="管理作品">
          <img src={publishManage} alt="" aria-hidden="true" />
          <span>管理作品</span>
        </button>
      </div>
    </aside>
  )
}
