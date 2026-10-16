import { describe, expect, it } from 'vitest'
import { formatCompactCount } from './formatCount'

describe('formatCompactCount', () => {
  it('保留千以内的原始计数', () => {
    expect(formatCompactCount(328)).toBe('328')
  })

  it('将千以上计数压缩为一位小数', () => {
    expect(formatCompactCount(12800)).toBe('12.8k')
    expect(formatCompactCount(12799)).toBe('12.8k')
    expect(formatCompactCount(1000)).toBe('1k')
  })
})
