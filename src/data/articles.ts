import type { Article } from '../types/community'

// 封面地址在视觉还原阶段接入 Figma 导出的原始素材。
export const initialArticles: Article[] = [
  {
    id: 'community-build',
    author: 'Flame',
    meta: '2小时前 · 阅读 1,280',
    title: '从零搭建 Easy Community：社区内容发布与互动设计',
    summary: '一个好用的社区，不只是把内容展示出来，还需要让发布、浏览、评论与反馈形成顺畅闭环。',
    cover: '',
    likes: 328,
    comments: 42,
    followed: false,
    liked: false,
  },
  {
    id: 'community-flow',
    author: 'Flame_Community_Designer',
    meta: '昨天 · 阅读 12,680',
    title: '设计社区内容流：让封面、作者与互动自然衔接',
    summary: '弱化卡片边界，通过作者信息、正文、封面和互动区建立更自然、连续的阅读节奏。',
    cover: '',
    likes: 12800,
    comments: 42,
    followed: true,
    liked: true,
  },
]

export function formatCount(count: number) {
  if (count < 1000) return String(count)
  return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`
}
