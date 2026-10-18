import type { CSSProperties } from 'react';

interface IconProps {
  name: string;
  size: number;
  className?: string;
}

// 复用插件导出的 SVG 形状，遮罩颜色跟随组件的默认、悬停和选中状态。
export function Icon({ name, size, className = '' }: IconProps) {
  const style = {
    '--icon-url': `url('/assets/${name}.svg')`,
    width: size,
    height: size,
  } as CSSProperties;
  return <span aria-hidden="true" className={`icon ${className}`} style={style} />;
}
