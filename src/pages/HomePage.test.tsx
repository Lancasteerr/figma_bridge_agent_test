import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { HomePage } from './HomePage'

afterEach(cleanup)

describe('Community 首页', () => {
  it('展示 Figma 首页中的主要内容', () => {
    render(<HomePage />)

    expect(screen.getByRole('heading', { level: 1, name: 'Easy Community' })).toBeInTheDocument()
    expect(screen.getByText('从零搭建 Easy Community：社区内容发布与互动设计')).toBeInTheDocument()
    expect(screen.getByText('设计社区内容流：让封面、作者与互动自然衔接')).toBeInTheDocument()
  })

  it('允许输入搜索文本并切换导航高亮', async () => {
    const user = userEvent.setup()
    render(<HomePage />)

    const search = screen.getByRole('searchbox', { name: '搜索社区内容' })
    await user.type(search, '社区设计')
    expect(search).toHaveValue('社区设计')

    await user.click(screen.getByRole('button', { name: '热门' }))
    expect(screen.getByRole('button', { name: '热门' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: '推荐' })).not.toHaveAttribute('aria-current')
  })

  it('分别维护两篇文章的关注状态', async () => {
    const user = userEvent.setup()
    render(<HomePage />)

    const firstFollow = screen.getByRole('button', { name: '关注 Flame' })
    const secondFollow = screen.getByRole('button', { name: '取消关注 Flame_Community_Designer' })

    await user.click(firstFollow)
    expect(screen.getByRole('button', { name: '取消关注 Flame' })).toHaveAttribute('aria-pressed', 'true')
    expect(secondFollow).toHaveAttribute('aria-pressed', 'true')

    await user.click(secondFollow)
    expect(screen.getByRole('button', { name: '关注 Flame_Community_Designer' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(screen.getByRole('button', { name: '取消关注 Flame' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('分别维护两篇文章的点赞状态并保留原始计数', async () => {
    const user = userEvent.setup()
    render(<HomePage />)

    const firstLike = screen.getByRole('button', {
      name: '点赞 从零搭建 Easy Community：社区内容发布与互动设计',
    })
    const secondLike = screen.getByRole('button', {
      name: '取消点赞 设计社区内容流：让封面、作者与互动自然衔接',
    })

    await user.click(firstLike)
    expect(screen.getByText('328')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: '取消点赞 从零搭建 Easy Community：社区内容发布与互动设计' }),
    ).toHaveAttribute('aria-pressed', 'true')
    expect(secondLike).toHaveAttribute('aria-pressed', 'true')

    await user.click(secondLike)
    expect(screen.getByText('12.8k')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: '点赞 设计社区内容流：让封面、作者与互动自然衔接' }),
    ).toHaveAttribute('aria-pressed', 'false')
  })
})
