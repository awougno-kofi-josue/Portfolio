import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { PathEntry } from './PathEntry.jsx'

export function ExperienceTimeline({ id, registerSection }) {
  const { t } = useLanguage()
  const e = t.experience

  return (
    <section id={id} ref={registerSection} className="section">
      <SectionHeading index="03" title={e.heading} />
      <p className="section-intro">{e.intro}</p>

      <h3 className="subsection-heading">{e.workHeading}</h3>
      <p className="subsection-intro">{e.workIntro}</p>
      <div className="path-list">
        {e.items.map((item, i) => (
          <PathEntry
            key={`${item.role}-${item.period}`}
            period={item.period}
            title={item.role}
            org={item.org}
            points={item.points}
            delay={i * 0.06}
          />
        ))}
      </div>

      <h3 className="subsection-heading">{e.educationHeading}</h3>
      <p className="subsection-intro">{e.educationIntro}</p>
      <div className="path-list">
        {e.education.map((item, i) => (
          <PathEntry
            key={`${item.title}-${item.period}`}
            period={item.period}
            title={item.title}
            org={item.org}
            text={item.text}
            delay={i * 0.06}
          />
        ))}
      </div>
    </section>
  )
}
