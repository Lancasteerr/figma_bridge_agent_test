import cityCover from '../assets/article-city.png'
import cloudsCover from '../assets/article-clouds.png'

/** 首页文章卡片的本地展示模型。 */
export interface Article {
  id: string
  author: string
  meta: string
  title: string
  summary: string
  cover: string
  likeLabel: string
  commentLabel: string
  initiallyFollowing: boolean
  initiallyLiked: boolean
}

/** 数据完全来自当前 Figma 设计，不连接远端接口。 */
export const articles: Article[] = [
  {
    id: 'build-community',
    author: 'Flame',
    meta: '2小时前 · 阅读 1,280',
    title: '从零搭建 Easy Community：社区内容发布与互动设计',
    summary: '一个好用的社区，不只是把内容展示出来，还需要让发布、浏览、评论与反馈形成顺畅闭环。',
    cover: cityCover,
    likeLabel: '328',
    commentLabel: '42',
    initiallyFollowing: false,
    initiallyLiked: false,
  },
  {
    id: 'natural-content-flow',
    author: 'Flame_Community_Designer',
    meta: '昨天 · 阅读 12,680',
    title: '设计社区内容流：让封面、作者与互动自然衔接',
    summary: '弱化卡片边界，通过作者信息、正文、封面和互动区建立更自然、连续的阅读节奏。',
    cover: cloudsCover,
    likeLabel: '12.8k',
    commentLabel: '42',
    initiallyFollowing: true,
    initiallyLiked: true,
  },
]
