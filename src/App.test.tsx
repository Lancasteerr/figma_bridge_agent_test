import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Easy Community 主页', () => {
  it('呈现设计稿中的页头与两篇文章', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Easy Community' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /从零搭建 Easy Community/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /设计社区内容流/ })).toBeInTheDocument()
    expect(screen.getByLabelText('社区文章').querySelectorAll('article')).toHaveLength(2)
  })

  it('可以切换首页导航选中态', async () => {
    const user = userEvent.setup()
    render(<App />)

    const navigation = screen.getByRole('navigation', { name: '首页内容分类' })
    const trending = within(navigation).getByRole('button', { name: '热门' })
    await user.click(trending)

    expect(trending).toHaveAttribute('aria-current', 'page')
    expect(within(navigation).getByRole('button', { name: '推荐' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('搜索框保存用户输入', async () => {
    const user = userEvent.setup()
    render(<App />)

    const search = screen.getByRole('textbox', { name: '搜索社区内容' })
    await user.type(search, '交互设计')

    expect(search).toHaveValue('交互设计')
  })

  it('可以独立切换关注状态', async () => {
    const user = userEvent.setup()
    render(<App />)

    const follow = screen.getByRole('button', { name: '+ 关注' })
    expect(follow).toHaveAttribute('aria-pressed', 'false')
    await user.click(follow)

    expect(screen.getAllByRole('button', { name: '已关注' })[0]).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('切换点赞状态时同步可数的点赞数', async () => {
    const user = userEvent.setup()
    render(<App />)

    const like = screen.getByRole('button', { name: '点赞，当前 328' })
    await user.click(like)

    expect(screen.getByRole('button', { name: '点赞，当前 329' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })
})
