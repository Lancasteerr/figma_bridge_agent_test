interface SectionTitleProps {
  title: string;
  english: string;
}

// 首页与发布卡片共用中英文基线标题，外层分别控制事实中的顶部留白。
export function SectionTitle({ title, english }: SectionTitleProps) {
  return (
    <h2 className="section-title">
      <span>{title}</span><span className="section-title-english">{english}</span>
    </h2>
  );
}
