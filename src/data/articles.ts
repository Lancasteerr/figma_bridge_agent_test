import type { Article } from '../types/community'
import cityCover from '../assets/figma/article-cover-city.png'
import cloudsCover from '../assets/figma/article-cover-clouds.png'

export const initialArticles: Article[] = [
  {
    id: 'community-build',
    author: 'Flame',
    meta: '2小时前 · 阅读 1,280',
    title: '从零搭建 Easy Community：社区内容发布与互动设计',
    summary: '一个好用的社区，不只是把内容展示出来，还需要让发布、浏览、评论与反馈形成顺畅闭环。',
    cover: cityCover,
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
    cover: cloudsCover,
    likes: 12800,
    comments: 42,
    followed: true,
    liked: true,
  },
]

// 计数以整数保存，展示时再按设计稿规则缩写为 k。
export function formatCount(count: number) {
  if (count < 1000) return String(count)
  return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`
}
