import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { chromium } from '@playwright/test'
import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

const VIEWPORT = { width: 1440, height: 1668 }
const REGIONS = {
  header: { x: 107, y: 34, width: 1227, height: 90 },
  sidebar: { x: 107, y: 167, width: 225, height: 823 },
  hero: { x: 349, y: 167, width: 681, height: 229 },
  publish: { x: 1047, y: 167, width: 287, height: 182 },
  feed: { x: 349, y: 411, width: 681, height: 1223 },
}

const referenceArgument = process.argv.find((argument) => argument.startsWith('--reference='))
const referencePath = resolve(referenceArgument?.slice('--reference='.length) || process.env.FIGMA_REFERENCE_IMAGE || '')
// 视觉脚本只做简单回归，2% 阈值用于过滤字体抗锯齿等细小渲染差异。
const maximumDifference = Number(process.env.MAX_VISUAL_DIFF_RATIO ?? '0.02')
const outputDirectory = resolve('artifacts/visual-acceptance')
const actualPath = resolve(outputDirectory, 'actual.png')
const diffPath = resolve(outputDirectory, 'diff.png')
const reportPath = resolve(outputDirectory, 'report.json')

if (!referenceArgument && !process.env.FIGMA_REFERENCE_IMAGE) {
  throw new Error('请通过 --reference=<Figma 渲染路径> 或 FIGMA_REFERENCE_IMAGE 指定参考图。')
}
if (!existsSync(referencePath)) {
  throw new Error(`未找到 Figma 参考图：${referencePath}`)
}

mkdirSync(outputDirectory, { recursive: true })

const previewProcess = spawn(
  process.execPath,
  [resolve('node_modules/vite/bin/vite.js'), 'preview', '--host', '127.0.0.1', '--port', '4173', '--strictPort'],
  { stdio: ['ignore', 'pipe', 'pipe'] },
)

// 轮询本地预览，避免依赖固定等待时间造成不稳定。
async function waitForPreview() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch('http://127.0.0.1:4173/')
      if (response.ok) return
    } catch {
      // 预览服务尚未就绪时继续下一次短轮询。
    }
    await new Promise((resolveWait) => setTimeout(resolveWait, 200))
  }
  throw new Error('本地预览服务未在 10 秒内启动。')
}

function crop(image, region) {
  const result = new PNG({ width: region.width, height: region.height })
  PNG.bitblt(image, result, region.x, region.y, region.width, region.height, 0, 0)
  return result
}

function compare(reference, actual, diffTarget) {
  const differentPixels = pixelmatch(reference.data, actual.data, diffTarget?.data, reference.width, reference.height, {
    threshold: 0.1,
    includeAA: false,
  })
  return differentPixels / (reference.width * reference.height)
}

let browser
try {
  await waitForPreview()
  browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 1 })
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: actualPath, fullPage: true, animations: 'disabled' })

  const reference = PNG.sync.read(readFileSync(referencePath))
  const actual = PNG.sync.read(readFileSync(actualPath))
  if (reference.width !== VIEWPORT.width || reference.height !== VIEWPORT.height) {
    throw new Error(`Figma 参考图尺寸应为 1440×1668，实际为 ${reference.width}×${reference.height}。`)
  }
  if (actual.width !== reference.width || actual.height !== reference.height) {
    throw new Error(`浏览器截图尺寸 ${actual.width}×${actual.height} 与参考图不一致。`)
  }

  const diff = new PNG({ width: reference.width, height: reference.height })
  const report = { wholePage: compare(reference, actual, diff), regions: {} }
  for (const [name, region] of Object.entries(REGIONS)) {
    report.regions[name] = compare(crop(reference, region), crop(actual, region))
  }
  writeFileSync(diffPath, PNG.sync.write(diff))
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)

  console.log(JSON.stringify(report, null, 2))
  const failures = Object.entries(report.regions).filter(([, ratio]) => ratio > maximumDifference)
  if (failures.length > 0) {
    throw new Error(`局部差异超过 ${(maximumDifference * 100).toFixed(2)}%：${failures.map(([name]) => name).join('、')}`)
  }
} finally {
  await browser?.close()
  previewProcess.kill()
}
