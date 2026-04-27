export function SectionHeader({ kicker, title, copy }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h1 className="section-title">{title}</h1>
      <p className="section-copy">{copy}</p>
    </div>
  )
}
