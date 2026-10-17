import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Easy Community 主页交互', () => {
  it('切换侧栏时只更新选中高光', async () => {
    const user = userEvent.setup()
    render(<App />)

    const recommended = screen.getByRole('button', { name: '推荐' })
    const popular = screen.getByRole('button', { name: '热门' })

    expect(recommended).toHaveAttribute('aria-pressed', 'true')
    await user.click(popular)
    expect(popular).toHaveAttribute('aria-pressed', 'true')
    expect(recommended).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText('从零搭建 Easy Community：社区内容发布与互动设计')).toBeInTheDocument()
  })

  it('允许编辑搜索内容但不触发页面跳转', async () => {
    const user = userEvent.setup()
    render(<App />)

    const search = screen.getByRole('textbox', { name: '搜索内容' })
    await user.type(search, '设计社区')
    expect(search).toHaveValue('设计社区')
  })

  it('切换第一篇文章的关注和点赞状态', async () => {
    const user = userEvent.setup()
    render(<App />)

    // 约束在首篇文章内，避免与第二篇的初始选中状态相互干扰。
    const firstArticle = screen.getAllByRole('article')[0]
    const follow = within(firstArticle).getByRole('button', { name: '+ 关注' })
    await user.click(follow)
    expect(within(firstArticle).getByRole('button', { name: '已关注' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    const like = within(firstArticle).getByRole('button', { name: '点赞，当前 328' })
    await user.click(like)
    expect(within(firstArticle).getByRole('button', { name: '取消点赞，当前 329' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
})
