export function SectionHeading({ index, title, trailing }) {
  return (
    <div className="section-head">
      <h2 className="section-heading">{title}</h2>
      {trailing ?? <span className="section-index">{index}</span>}
    </div>
  )
}
