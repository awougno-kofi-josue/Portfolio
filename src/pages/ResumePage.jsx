import { SectionHeader, TimelineCard } from '../components'
import { education, experiences, resumeSectionIcons, skillLevels } from '../data/siteData'

const ExperienceIcon = resumeSectionIcons.experience
const EducationIcon = resumeSectionIcons.education

export function ResumePage() {
  return (
    <section className="container-shell py-14 md:py-20">
      <SectionHeader
        kicker="CV"
        title="Parcours, experiences et formation"
        copy="Une lecture claire de mon evolution, de la formation academique a la construction de produits numeriques concrets."
      />

      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-panel p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
              <ExperienceIcon size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-white">Experience professionnelle</h2>
              <p className="text-sm text-slate-400">Ce que j&apos;ai construit et appris sur le terrain.</p>
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((item) => (
              <TimelineCard key={`${item.title}-${item.period}`} {...item} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-panel p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-2xl border border-accent/20 bg-accent/10 p-3 text-accent">
                <EducationIcon size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white">Formation</h2>
                <p className="text-sm text-slate-400">Base academique et montee en competence technique.</p>
              </div>
            </div>

            <div className="space-y-5">
              {education.map((item) => (
                <article key={`${item.title}-${item.period}`} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{item.period}</p>
                  <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.school}</p>
                  <p className="mt-3 text-base leading-7 text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8">
            <h2 className="text-2xl font-extrabold text-white">Competences cles</h2>
            <div className="mt-5 space-y-4">
              {skillLevels.map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-accent" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
