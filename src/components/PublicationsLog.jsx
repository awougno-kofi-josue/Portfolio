import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { Reveal } from './Reveal.jsx'

export function PublicationsLog({ id, registerSection }) {
  const { t } = useLanguage()
  const pub = t.publications

  return (
    <section id={id} ref={registerSection} className="section">
      <SectionHeading index="06" title={pub.heading} />

      <Reveal as="article" className="publication-entry">
        <span className="eyebrow">{pub.manuscriptLabel}</span>
        <h3>{pub.manuscript.title}</h3>
        <p>{pub.manuscript.text}</p>
      </Reveal>

    </section>
  )
}
