export function TimelineCard({ period, title, company, points }) {
  return (
    <article className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
      <span className="mb-3 inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        {period}
      </span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-400">{company}</p>
      <ul className="mt-4 space-y-2 text-slate-300">
        {points.map((point) => (
          <li key={point}>- {point}</li>
        ))}
      </ul>
    </article>
  )
}
