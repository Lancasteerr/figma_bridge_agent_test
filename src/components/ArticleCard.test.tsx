import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { articles } from '../data/articles'
import { ArticleCard } from './ArticleCard'

describe('ArticleCard', () => {
  it('独立切换关注状态', async () => {
    const user = userEvent.setup()
    render(<ArticleCard article={articles[0]} />)

    const followButton = screen.getByRole('button', { name: '+ 关注' })
    await user.click(followButton)

    expect(screen.getByRole('button', { name: '已关注' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('点赞时增加计数并支持取消', async () => {
    const user = userEvent.setup()
    render(<ArticleCard article={articles[0]} />)

    const likeButton = screen.getByRole('button', { name: '点赞，当前 328' })
    await user.click(likeButton)
    expect(screen.getByRole('button', { name: '取消点赞，当前 329' })).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('button', { name: '取消点赞，当前 329' }))
    expect(screen.getByRole('button', { name: '点赞，当前 328' })).toHaveAttribute('aria-pressed', 'false')
  })
})
