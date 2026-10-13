import manageIcon from '../assets/icons/manage.svg'
import publishIcon from '../assets/icons/publish.svg'
import { MaskIcon } from './MaskIcon'

interface PublishActionProps {
  icon: string
  label: string
  className?: string
}

/** 发布入口共用同一视觉结构，仅图标和文案不同。 */
function PublishAction({ icon, label, className = '' }: PublishActionProps) {
  return (
    <button className={`publish-card__action ${className}`} type="button">
      <MaskIcon className="publish-card__action-icon" src={icon} />
      <span>{label}</span>
    </button>
  )
}

/** 右侧作品发布卡片，仅提供本地按钮反馈，不打开新页面。 */
export function PublishCard() {
  return (
    <section aria-labelledby="publish-title" className="publish-card">
      <div className="publish-card__heading">
        <div className="publish-card__heading-copy" id="publish-title">
          <strong>作品发布</strong>
          <span>POST</span>
        </div>
      </div>
      <div className="publish-card__actions">
        <PublishAction icon={publishIcon} label="发图文" />
        <PublishAction className="publish-card__action--manage" icon={manageIcon} label="管理作品" />
      </div>
    </section>
  )
}
