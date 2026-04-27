export function ContactInfoCard({ icon: Icon, title, value, href }) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="glass-panel flex items-start gap-4 p-6 hover:border-accent/20 hover:bg-white/10"
    >
      <div className="rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{title}</p>
        <p className="mt-2 text-lg font-semibold text-white">{value}</p>
      </div>
    </a>
  )
}
