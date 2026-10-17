import styles from './SectionTitle.module.css'

interface SectionTitleProps {
  title: string
  suffix: string
  lineWidth: number
}

// 侧栏与发布卡共享同一套中英文标题和强调线结构。
export function SectionTitle({ title, suffix, lineWidth }: SectionTitleProps) {
  return (
    <div className={styles.root} style={{ '--line-width': `${lineWidth}px` } as React.CSSProperties}>
      <div className={styles.textGroup}>
        <span className={styles.title}>{title}</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <span className={styles.line} aria-hidden="true" />
    </div>
  )
}
