import type { CSSProperties } from 'react'

interface MaskIconProps {
  src: string
  className?: string
}

/** 使用 Figma 导出的 SVG 轮廓，并允许由组件状态控制颜色。 */
export function MaskIcon({ src, className = '' }: MaskIconProps) {
  const style: CSSProperties = {
    WebkitMask: `url("${src}") center / contain no-repeat`,
    mask: `url("${src}") center / contain no-repeat`,
  }

  return <span aria-hidden="true" className={`mask-icon ${className}`} style={style} />
}
