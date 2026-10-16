import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('保留搜索框的本地输入', async () => {
    const user = userEvent.setup()
    render(<HomePage />)

    const searchInput = screen.getByRole('searchbox', { name: '搜索社区内容' })
    await user.type(searchInput, 'React')
    expect(searchInput).toHaveValue('React')
  })

  it('点击或键盘激活时只切换侧栏高亮', async () => {
    const user = userEvent.setup()
    render(<HomePage />)

    const hotButton = screen.getByRole('button', { name: '热门' })
    await user.click(hotButton)
    expect(hotButton).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: '推荐' })).not.toHaveAttribute('aria-current')

    const followingButton = screen.getByRole('button', { name: '关注' })
    followingButton.focus()
    await user.keyboard('{Enter}')
    expect(followingButton).toHaveAttribute('aria-current', 'page')
    expect(screen.getAllByRole('article')).toHaveLength(2)
  })
})
