import sidebarFollowing from '../assets/icons/sidebar-following.svg'
import sidebarHot from '../assets/icons/sidebar-hot.svg'
import sidebarRecommend from '../assets/icons/sidebar-recommend.svg'
import articleAvatarDefault from '../assets/images/article-avatar-default.png'
import articleAvatarFollowing from '../assets/images/article-avatar-following.png'
import articleCity from '../assets/images/article-city.png'
import articleClouds from '../assets/images/article-clouds.png'
import type { Article, NavItem } from '../types/community'

// 页面数据保持纯静态，便于组件只关注 Figma 定义的展示与本地状态。
export const navItems: NavItem[] = [
  { id: 'recommended', label: '推荐', icon: sidebarRecommend },
  { id: 'hot', label: '热门', icon: sidebarHot },
  { id: 'following', label: '关注', icon: sidebarFollowing },
]

export const articles: Article[] = [
  {
    id: 'community-loop',
    author: 'Flame',
    meta: '2小时前 · 阅读 1,280',
    title: '从零搭建 Easy Community：社区内容发布与互动设计',
    summary: '一个好用的社区，不只是把内容展示出来，还需要让发布、浏览、评论与反馈形成顺畅闭环。',
    avatar: articleAvatarDefault,
    cover: articleCity,
    likeCount: '328',
    commentCount: '42',
    initialFollowed: false,
    initialLiked: false,
  },
  {
    id: 'natural-content-flow',
    author: 'Flame_Community_Designer',
    meta: '昨天 · 阅读 12,680',
    title: '设计社区内容流：让封面、作者与互动自然衔接',
    summary: '弱化卡片边界，通过作者信息、正文、封面和互动区建立更自然、连续的阅读节奏。',
    avatar: articleAvatarFollowing,
    cover: articleClouds,
    likeCount: '12.8k',
    commentCount: '42',
    initialFollowed: true,
    initialLiked: true,
  },
]
