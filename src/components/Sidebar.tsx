import { categories } from '../data/community';
import type { CategoryId } from '../data/community';
import { Icon } from './Icon';
import { SectionTitle } from './SectionTitle';

interface SidebarProps {
  selected: CategoryId;
  onSelect: (id: CategoryId) => void;
}

// 侧栏按钮只改变高亮，不请求数据、不改变中间文章的排序。
export function Sidebar({ selected, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar panel" data-figma="84:674">
      <div className="sidebar-heading"><SectionTitle title="首页" english="INDEX" /></div>
      <nav className="category-list" aria-label="首页分类">
        {categories.map((category) => (
          <button type="button" key={category.id} className="category-button"
            aria-pressed={selected === category.id} onClick={() => onSelect(category.id)}>
            <Icon name={category.icon} size={30} /><span>{category.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
