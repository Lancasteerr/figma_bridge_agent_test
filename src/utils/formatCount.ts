export function formatCompactCount(count: number): string {
  if (count < 1000) {
    return String(count)
  }

  const formatted = (count / 1000).toFixed(1).replace(/\.0$/, '')
  return `${formatted}k`
}
