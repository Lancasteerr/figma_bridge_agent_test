import { Icon } from './Icon';
import { SectionTitle } from './SectionTitle';

// 发布入口复用提示回调，保持 287×182 卡片及两种图标的原始尺寸。
export function PublishCard({ notify }: { notify: (message: string) => void }) {
  return (
    <aside className="publish-card panel" aria-label="作品发布" data-figma="84:696">
      <div className="publish-heading"><SectionTitle title="作品发布" english="POST" /></div>
      <div className="publish-actions">
        <button type="button" onClick={() => notify('发图文：仅作前端展示')}>
          <Icon name="edit" size={48} /><span>发图文</span>
        </button>
        <button type="button" onClick={() => notify('管理作品：仅作前端展示')}>
          <Icon name="inbox" size={48} /><span>管理作品</span>
        </button>
      </div>
    </aside>
  );
}
