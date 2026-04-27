import { ArrowRight } from 'lucide-react'

export function ProjectCard({ project, compact = false }) {
  const links = project.links ?? (project.link ? [{ label: 'Voir le projet', href: project.link }] : [])

  return (
    <article className="glass-panel overflow-hidden">
      <div className={compact ? 'p-6' : 'p-7'}>
        {project.highlight ? (
          <div className="mb-3 inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            {project.highlight}
          </div>
        ) : null}
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-base leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
              {item}
            </span>
          ))}
        </div>
        {links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={`${project.title}-${link.href}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-ink"
              >
                {link.label} <ArrowRight size={16} />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
