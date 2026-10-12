import manageIcon from '../assets/icons/manage-work.svg'
import publishIcon from '../assets/icons/publish-post.svg'
import { MaskIcon } from './MaskIcon'

export function PublishPanel() {
  return (
    <aside className="publish-panel">
      <div className="section-title publish-panel__title">
        <span>作品发布</span>
        <small>POST</small>
      </div>
      <div className="publish-panel__actions">
        <button type="button" className="publish-action">
          <MaskIcon src={publishIcon} size={48} />
          <span>发图文</span>
        </button>
        <button type="button" className="publish-action publish-action--manage">
          <MaskIcon src={manageIcon} size={48} />
          <span>管理作品</span>
        </button>
      </div>
    </aside>
  )
}
