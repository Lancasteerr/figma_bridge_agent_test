import articleCoverCity from '../assets/images/article-cover-city.png'
import articleCoverClouds from '../assets/images/article-cover-clouds.png'
import navFollowing from '../assets/icons/nav-following.svg'
import navRecommended from '../assets/icons/nav-recommended.svg'
import navTrending from '../assets/icons/nav-trending.svg'
import type { Article, NavItem } from '../types/community'

// 页面文案与初始状态均来自当前 Figma 首页，避免在组件中散落展示数据。
export const navigationItems: NavItem[] = [
  { id: 'recommended', label: '推荐', icon: navRecommended },
  { id: 'trending', label: '热门', icon: navTrending },
  { id: 'following', label: '关注', icon: navFollowing },
]

export const articles: Article[] = [
  {
    id: 'community-from-zero',
    author: 'Flame',
    meta: '2小时前 · 阅读 1,280',
    title: '从零搭建 Easy Community：社区内容发布与互动设计',
    summary: '一个好用的社区，不只是把内容展示出来，还需要让发布、浏览、评论与反馈形成顺畅闭环。',
    cover: articleCoverCity,
    likeCount: '328',
    commentCount: '42',
    initialFollowed: false,
    initialLiked: false,
  },
  {
    id: 'community-content-flow',
    author: 'Flame_Community_Designer',
    meta: '昨天 · 阅读 12,680',
    title: '设计社区内容流：让封面、作者与互动自然衔接',
    summary: '弱化卡片边界，通过作者信息、正文、封面和互动区建立更自然、连续的阅读节奏。',
    cover: articleCoverClouds,
    likeCount: '12.8k',
    commentCount: '42',
    initialFollowed: true,
    initialLiked: true,
  },
]
