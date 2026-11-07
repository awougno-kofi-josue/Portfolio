import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { Reveal } from './Reveal.jsx'

export function ResearchInterestsSection({ id, registerSection }) {
  const { t } = useLanguage()
  const r = t.research

  return (
    <section id={id} ref={registerSection} className="section">
      <SectionHeading index="02" title={r.heading} />

      <Reveal as="p" className="section-intro research-intro" direction="left">
        {r.intro}
      </Reveal>

      <div className="research-grid">
        {r.items.map((item, i) => (
          <Reveal as="article" className="research-card" key={item.title} delay={i * 0.07}>
            <span className="research-index">{String(i + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
