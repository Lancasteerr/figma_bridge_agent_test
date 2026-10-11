import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('Easy Community 主页', () => {
  it('呈现设计稿中的主要内容和初始状态', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: 'Easy Community' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '推荐' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('从零搭建 Easy Community：社区内容发布与互动设计')).toBeInTheDocument()
    expect(screen.getByText('设计社区内容流：让封面、作者与互动自然衔接')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '点赞 328' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: '点赞 12.8k' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('可以在本地切换侧栏选中项', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: '热门' }))

    expect(screen.getByRole('button', { name: '热门' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: '推荐' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('搜索框保留用户输入但不发起导航', async () => {
    const user = userEvent.setup()
    render(<App />)
    const search = screen.getByRole('searchbox', { name: '搜索社区内容' })

    await user.type(search, '设计社区')

    expect(search).toHaveValue('设计社区')
    expect(window.location.href).toContain('http://localhost')
  })

  it('关注按钮在两个设计状态间切换', async () => {
    const user = userEvent.setup()
    render(<App />)
    const firstArticle = screen.getByText('Flame').closest('article')

    expect(firstArticle).not.toBeNull()
    const followButton = within(firstArticle!).getByRole('button', { name: '+ 关注' })
    await user.click(followButton)

    expect(within(firstArticle!).getByRole('button', { name: '已关注' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('点赞按钮切换样式并更新整数计数', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: '点赞 328' }))

    expect(screen.getByRole('button', { name: '点赞 329' })).toHaveAttribute('aria-pressed', 'true')
  })
})

