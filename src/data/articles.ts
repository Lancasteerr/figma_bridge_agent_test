import articleCity from '../assets/images/article-city.png'
import articleClouds from '../assets/images/article-clouds.png'
import type { Article } from '../types/community'

// 文章内容直接来自当前 Figma 首页，保持展示文本与初始状态一致。
export const articles: Article[] = [
  {
    id: 'build-easy-community',
    authorName: 'Flame',
    authorMeta: '2小时前 · 阅读 1,280',
    title: '从零搭建 Easy Community：社区内容发布与互动设计',
    summary: '一个好用的社区，不只是把内容展示出来，还需要让发布、浏览、评论与反馈形成顺畅闭环。',
    cover: articleCity,
    coverAlt: '阳光下的城市与森林风景',
    initialFollowing: false,
    initialLiked: false,
    likeCount: 328,
    commentCount: 42,
  },
  {
    id: 'community-content-flow',
    authorName: 'Flame_Community_Designer',
    authorMeta: '昨天 · 阅读 12,680',
    title: '设计社区内容流：让封面、作者与互动自然衔接',
    summary: '弱化卡片边界，通过作者信息、正文、封面和互动区建立更自然、连续的阅读节奏。',
    cover: articleClouds,
    coverAlt: '云海之上的岛屿风景',
    initialFollowing: true,
    initialLiked: true,
    likeCount: 12800,
    commentCount: 42,
  },
]
