import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { Reveal } from './Reveal.jsx'

export function ProfileSection({ id, registerSection }) {
  const { t } = useLanguage()
  const p = t.profile

  return (
    <section id={id} ref={registerSection} className="section">
      <SectionHeading index="01" title={p.heading} />

      <div className="profile-layout">
        <div>
          <Reveal as="p" className="profile-lede">
            {p.lede}
          </Reveal>

          <div className="profile-body">
            {p.body.map((paragraph, i) => (
              <Reveal as="p" key={paragraph.slice(0, 24)} delay={0.08 + i * 0.08}>
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal className="profile-languages" delay={0.2}>
            <span className="eyebrow">{p.languagesLabel}</span>
            <span>{p.languages}</span>
          </Reveal>
        </div>

        <div className="profile-aside">
          <Reveal direction="left" delay={0.1} className="quick-facts">
            {p.quickFacts.map((fact) => (
              <div className="quick-fact" key={fact.k}>
                <span className="k">{fact.k}</span>
                <span className="v">{fact.v}</span>
              </div>
            ))}
          </Reveal>

        </div>
      </div>

      <Reveal className="skills-block" delay={0.15}>
        <span className="eyebrow">{p.skillsLabel}</span>
        <ul className="skills-matrix">
          {p.keySkills.map((skill, i) => (
            <li className="skill-cell" key={skill.name}>
              <span className="skill-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">
                {skill.level}
                <span className="unit">%</span>
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
