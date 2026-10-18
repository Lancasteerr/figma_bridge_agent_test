// 文案与初始状态来自主页工作单元，分类切换不改写文章数据。
export interface Article {
  id: string;
  author: string;
  metadata: string;
  title: string;
  summary: string;
  cover: string;
  coverSide: 'left' | 'right';
  liked: boolean;
  following: boolean;
  likes: number;
  comments: number;
}

export const initialArticles: Article[] = [
  {
    id: '84:710',
    author: 'Flame',
    metadata: '2小时前 · 阅读 1,280',
    title: '从零搭建 Easy Community：社区内容发布与互动设计',
    summary: '一个好用的社区，不只是把内容展示出来，还需要让发布、浏览、评论与反馈形成顺畅闭环。',
    cover: '/assets/cover-city.png',
    coverSide: 'left',
    liked: false,
    following: false,
    likes: 328,
    comments: 42,
  },
  {
    id: '84:713',
    author: 'Flame_Community_Designer',
    metadata: '昨天 · 阅读 12,680',
    title: '设计社区内容流：让封面、作者与互动自然衔接',
    summary: '弱化卡片边界，通过作者信息、正文、封面和互动区建立更自然、连续的阅读节奏。',
    cover: '/assets/cover-clouds.png',
    coverSide: 'right',
    liked: true,
    following: true,
    likes: 12800,
    comments: 42,
  },
];

export const categories = [
  { id: 'recommended', label: '推荐', icon: 'terminal' },
  { id: 'popular', label: '热门', icon: 'trending' },
  { id: 'following', label: '关注', icon: 'compass' },
] as const;

export type CategoryId = typeof categories[number]['id'];
