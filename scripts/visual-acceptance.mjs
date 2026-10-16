import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { chromium } from '@playwright/test'
import { preview } from 'vite'

const previewUrl = 'http://127.0.0.1:4173/'
const outputDirectory = resolve('artifacts/visual')

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message)
  }
}

const launchBrowser = async () => {
  try {
    // Windows 默认复用系统 Edge，CI 也可自动回退到 Playwright Chromium。
    return await chromium.launch({ channel: 'msedge', headless: true })
  } catch {
    return chromium.launch({ headless: true })
  }
}

const inspectLayout = async (browser, viewport) => {
  const page = await browser.newPage({ viewport })
  await page.goto(previewUrl, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)

  const layout = await page.evaluate(() => {
    const canvas = document.querySelector('main')
    const background = document.querySelector('[aria-hidden="true"]')
    const canvasRect = canvas?.getBoundingClientRect()
    const backgroundStyle = background ? getComputedStyle(background) : null

    return {
      canvas: canvasRect
        ? { left: canvasRect.left, top: canvasRect.top, width: canvasRect.width }
        : null,
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      background: backgroundStyle
        ? {
            position: backgroundStyle.position,
            size: backgroundStyle.backgroundSize,
          }
        : null,
    }
  })

  return { page, layout }
}

let browser
let previewServer

try {
  await mkdir(outputDirectory, { recursive: true })
  // 直接使用 Vite API 启动生产预览，确保脚本结束时能完整回收服务。
  previewServer = await preview({
    logLevel: 'error',
    preview: { host: '127.0.0.1', port: 4173, strictPort: true },
  })
  browser = await launchBrowser()

  const desktop = await inspectLayout(browser, { width: 1440, height: 1668 })
  assert(desktop.layout.canvas?.left === 0, '1440px 视口中的画布应从 x=0 开始。')
  assert(desktop.layout.canvas?.width === 1440, '设计画布宽度应固定为 1440px。')
  assert(desktop.layout.background?.position === 'fixed', '页面背景应固定在视口。')
  assert(desktop.layout.background?.size === 'cover', '页面背景应使用 cover 填充。')
  await desktop.page.screenshot({
    path: resolve(outputDirectory, 'home-1440x1668.png'),
    fullPage: false,
  })
  await desktop.page.close()

  const wide = await inspectLayout(browser, { width: 1920, height: 1080 })
  const expectedWideLeft = (wide.layout.clientWidth - 1440) / 2
  assert(
    Math.abs((wide.layout.canvas?.left ?? -1) - expectedWideLeft) < 1,
    '1920px 宽屏中的设计画布应水平居中。',
  )
  await wide.page.close()

  const narrow = await inspectLayout(browser, { width: 1200, height: 900 })
  assert(narrow.layout.canvas?.left === 0, '窄屏中的设计画布应从 x=0 开始。')
  assert(
    narrow.layout.scrollWidth > narrow.layout.clientWidth,
    '1200px 窄屏应产生横向滚动。',
  )
  await narrow.page.close()

  console.log(`视觉验收通过，基准截图：${resolve(outputDirectory, 'home-1440x1668.png')}`)
} finally {
  await browser?.close()
  await new Promise((resolvePromise, rejectPromise) => {
    if (!previewServer) {
      resolvePromise()
      return
    }

    previewServer.httpServer.close((error) => {
      if (error) rejectPromise(error)
      else resolvePromise()
    })
  })
}
