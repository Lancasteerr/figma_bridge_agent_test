import articleCity from '../assets/images/article-city.png'
import articleClouds from '../assets/images/article-clouds.png'
import type { ArticleData } from '../types/community'

/** 文章数据与 Figma 主页中的两个固定验收样例一一对应。 */
export const articles: ArticleData[] = [
  {
    id: 'community-loop',
    author: 'Flame',
    meta: '2小时前 · 阅读 1,280',
    title: '从零搭建 Easy Community：社区内容发布与互动设计',
    summary:
      '一个好用的社区，不只是把内容展示出来，还需要让发布、浏览、评论与反馈形成顺畅闭环。',
    cover: articleCity,
    likes: 328,
    likesLabel: '328',
    commentsLabel: '42',
    initialFollowing: false,
    initialLiked: false,
  },
  {
    id: 'natural-content-flow',
    author: 'Flame_Community_Designer',
    meta: '昨天 · 阅读 12,680',
    title: '设计社区内容流：让封面、作者与互动自然衔接',
    summary:
      '弱化卡片边界，通过作者信息、正文、封面和互动区建立更自然、连续的阅读节奏。',
    cover: articleClouds,
    likes: 12800,
    likesLabel: '12.8k',
    commentsLabel: '42',
    initialFollowing: true,
    initialLiked: true,
    keepCompactLikeLabel: true,
  },
]

