export function FeatureCard({ icon: Icon, title, text }) {
  return (
    <article className="glass-panel p-6">
      <div className="mb-4 inline-flex rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </article>
  )
}
