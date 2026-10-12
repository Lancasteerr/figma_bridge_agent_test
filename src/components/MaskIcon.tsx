import type { CSSProperties } from 'react'

interface MaskIconProps {
  src: string
  size?: number
  width?: number
  height?: number
  className?: string
}

// 使用 Figma 导出的 SVG 轮廓作为遮罩，颜色由组件状态统一控制。
export function MaskIcon({ src, size, width, height, className = '' }: MaskIconProps) {
  const style = {
    '--mask-image': `url("${src}")`,
    width: width ?? size,
    height: height ?? size,
  } as CSSProperties

  return <span className={`mask-icon ${className}`.trim()} style={style} aria-hidden="true" />
}
