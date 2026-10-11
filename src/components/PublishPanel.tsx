import manageIcon from '../assets/icons/manage-work.svg'
import publishIcon from '../assets/icons/publish-post.svg'

const actions = [
  { label: '发图文', icon: publishIcon },
  { label: '管理作品', icon: manageIcon },
]

/** 发布卡片仅提供本地按压反馈，不触发导航或网络请求。 */
export function PublishPanel() {
  return (
    <aside className="publish-panel" aria-label="作品发布">
      <div className="publish-panel__heading">
        <div>
          <span>作品发布</span>
          <small>POST</small>
        </div>
      </div>
      <div className="publish-panel__actions">
        {actions.map((action) => (
          <button key={action.label} type="button">
            <img src={action.icon} alt="" aria-hidden="true" />
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

