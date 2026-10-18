import { useState } from 'react';
import { Icon } from './Icon';

interface HeaderProps {
  notify: (message: string) => void;
}

// 搜索保留原始 393×41 输入区域，提交只触发已确认的前端提示。
export function Header({ notify }: HeaderProps) {
  const [query, setQuery] = useState('');
  return (
    <header className="site-header panel" data-figma="84:695">
      <div className="header-inner">
        <h1>Easy Community</h1>
        <div className="header-tools">
          <div className="search-wrapper">
            <form className="search-form" role="search" onSubmit={(event) => {
              event.preventDefault();
              notify(query.trim() ? '搜索演示：暂未接入结果' : '请输入搜索内容');
            }}>
              <input aria-label="搜索内容" placeholder="搜索你感兴趣的内容"
                value={query} onChange={(event) => setQuery(event.target.value)} />
              <button type="submit" aria-label="搜索"><Icon name="search" size={16} /></button>
            </form>
          </div>
          <div className="header-actions">
            <button type="button" className="publish-center" aria-label="发布中心"
              onClick={() => notify('发布中心：仅作前端展示')}>
              <Icon name="edit-small" size={25} />
            </button>
            <button type="button" className="profile-button" aria-label="个人主页"
              onClick={() => notify('个人主页：仅作前端展示')}>
              <img src="/assets/avatar.jpg" alt="用户头像" width={40} height={40} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
