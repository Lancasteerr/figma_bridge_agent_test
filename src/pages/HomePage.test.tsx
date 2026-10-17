import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('呈现 Figma 中的初始文章与状态', () => {
    render(<HomePage />)

    expect(screen.getByRole('heading', { name: 'Easy Community' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '从零搭建 Easy Community：社区内容发布与互动设计' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '设计社区内容流：让封面、作者与互动自然衔接' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '+ 关注' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: '已关注' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: '点赞，当前 328' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByRole('button', { name: '取消点赞，当前 12.8k' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('独立切换导航、搜索与第一篇文章状态', () => {
    render(<HomePage />)

    const recommended = screen.getByRole('button', { name: '推荐' })
    const hot = screen.getByRole('button', { name: '热门' })
    fireEvent.click(hot)
    expect(hot).toHaveAttribute('aria-current', 'page')
    expect(recommended).not.toHaveAttribute('aria-current')

    const search = screen.getByRole('textbox', { name: '搜索你感兴趣的内容' })
    fireEvent.change(search, { target: { value: '视觉设计' } })
    expect(search).toHaveValue('视觉设计')

    const firstArticle = screen.getByTestId('article-community-loop')
    const secondArticle = screen.getByTestId('article-natural-content-flow')
    fireEvent.click(within(firstArticle).getByRole('button', { name: '+ 关注' }))
    fireEvent.click(within(firstArticle).getByRole('button', { name: '点赞，当前 328' }))

    expect(within(firstArticle).getByRole('button', { name: '已关注' })).toHaveAttribute('aria-pressed', 'true')
    expect(within(firstArticle).getByRole('button', { name: '取消点赞，当前 328' })).toHaveAttribute('aria-pressed', 'true')
    expect(within(firstArticle).getByText('328')).toBeInTheDocument()
    expect(within(secondArticle).getByRole('button', { name: '已关注' })).toHaveAttribute('aria-pressed', 'true')
    expect(within(secondArticle).getByRole('button', { name: '取消点赞，当前 12.8k' })).toHaveAttribute('aria-pressed', 'true')
  })
})
