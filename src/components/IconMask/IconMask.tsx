import type { CSSProperties } from 'react'
import styles from './IconMask.module.css'

interface IconMaskProps {
  source: string
  size: number
  className?: string
}

// 使用 Figma 导出的 SVG 作为遮罩，可在不改变轮廓的前提下继承组件状态颜色。
export function IconMask({ source, size, className = '' }: IconMaskProps) {
  const style = {
    '--icon-source': `url("${source}")`,
    '--icon-size': `${size}px`,
  } as CSSProperties

  return <span aria-hidden="true" className={`${styles.icon} ${className}`} style={style} />
}
