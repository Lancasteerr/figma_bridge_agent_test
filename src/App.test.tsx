import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Easy Community 首页', () => {
  it('呈现 Figma 规定的初始导航和文章状态', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: '推荐' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: '+ 关注' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: '已关注' })).toHaveAttribute('aria-pressed', 'true')

    const likeButtons = screen.getAllByRole('button', { name: /点赞/ })
    expect(likeButtons[0]).toHaveAttribute('aria-pressed', 'false')
    expect(likeButtons[1]).toHaveAttribute('aria-pressed', 'true')
    expect(likeButtons[1]).toHaveTextContent('12.8k')
  })

  it('切换导航并保留固定文章内容', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: '热门' }))

    expect(screen.getByRole('button', { name: '热门' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByText('从零搭建 Easy Community：社区内容发布与互动设计')).toBeInTheDocument()
  })

  it('允许输入搜索词但不筛选本地文章', async () => {
    const user = userEvent.setup()
    render(<App />)

    const search = screen.getByRole('searchbox', { name: '搜索社区内容' })
    await user.type(search, '社区设计')

    expect(search).toHaveValue('社区设计')
    expect(screen.getAllByRole('article')).toHaveLength(2)
  })

  it('独立切换关注和点赞状态', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: '+ 关注' }))
    expect(screen.getAllByRole('button', { name: '已关注' })).toHaveLength(2)

    const firstLike = screen.getAllByRole('button', { name: /点赞/ })[0]
    await user.click(firstLike)
    expect(firstLike).toHaveAttribute('aria-pressed', 'true')
    expect(within(firstLike).getByText('329')).toBeInTheDocument()

    await user.click(firstLike)
    expect(firstLike).toHaveAttribute('aria-pressed', 'false')
    expect(within(firstLike).getByText('328')).toBeInTheDocument()
  })
})
