import '@testing-library/jest-dom/vitest'

// 清理 JSDOM 中可能残留的滚动位置，保证布局测试互不影响。
afterEach(() => {
  window.scrollTo(0, 0)
})
