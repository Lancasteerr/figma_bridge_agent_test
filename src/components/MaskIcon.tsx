import type { CSSProperties } from 'react'

interface MaskIconProps {
  src: string
  className?: string
}

/** 使用 Figma 导出的 SVG 轮廓作为遮罩，以便精确保留形状并切换状态色。 */
export function MaskIcon({ src, className = '' }: MaskIconProps) {
  const style = { '--icon-source': `url("${src}")` } as CSSProperties

  return <span className={`mask-icon ${className}`} style={style} aria-hidden="true" />
}

