import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { Reveal } from './Reveal.jsx'
import { Icon } from './icons/Icon.jsx'

export function ProjectShowcase({ id, registerSection }) {
  const { t } = useLanguage()
  const pr = t.projects

  return (
    <section id={id} ref={registerSection} className="section section--band">
      <SectionHeading index="04" title={pr.heading} />
      <p className="section-intro" style={{ marginBottom: '2.2rem' }}>
        {pr.intro}
      </p>

      <Reveal as="article" className="project-featured">
        <span className="eyebrow">{pr.featuredLabel}</span>
        <h3>{pr.featured.title}</h3>
        <span className="tag">{pr.featured.tag}</span>
        <p>{pr.featured.text}</p>
      </Reveal>

      <div className="project-list">
        {pr.items.map((item, i) => (
          <Reveal as="article" className="project-row" key={item.title} delay={i * 0.08} direction={i % 2 ? 'right' : 'left'}>
            <div>
              <h3>{item.title}</h3>
              <span className="tag">{item.tag}</span>
            </div>
            <div>
              <p>{item.text}</p>
              <a className="external-link" href={item.link} target="_blank" rel="noreferrer">
                {item.linkLabel}
                <Icon name="arrowUpRight" size={14} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
