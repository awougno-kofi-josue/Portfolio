import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { Reveal } from './Reveal.jsx'
import { Icon } from './icons/Icon.jsx'
import { ContactForm } from './ContactForm.jsx'
import { links } from '../data/links.js'

export function ContactLedger({ id, registerSection }) {
  const { t } = useLanguage()
  const c = t.contact

  const entries = [
    { icon: 'mail', label: c.emailLabel, value: links.email, href: `mailto:${links.email}` },
    { icon: 'phone', label: c.phoneLabel, value: links.phone, href: `tel:${links.phoneHref}` },
    { icon: 'linkedin', label: c.linkedinLabel, value: 'linkedin.com/in/kofi-yosua-awougno', href: links.linkedin },
    { icon: 'github', label: c.githubLabel, value: 'github.com/awougno-kofi-josue', href: links.github },
  ]

  return (
    <section id={id} ref={registerSection} className="section">
      <SectionHeading index="08" title={c.heading} />

      <div className="contact-layout">
        <div className="contact-info">
          <p className="section-intro">{c.intro}</p>

          <div className="contact-grid">
            {entries.map((entry, i) => {
              const isExternal = entry.href.startsWith('http')
              return (
              <Reveal
                as="a"
                className="contact-item"
                key={entry.label}
                href={entry.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                delay={i * 0.06}
              >
                <span className="icon-box">
                  <Icon name={entry.icon} size={18} />
                </span>
                <span>
                  <span className="label">{entry.label}</span>
                  <span className="value">{entry.value}</span>
                </span>
              </Reveal>
              )
            })}
          </div>

          <div className="contact-context">
            <div className="contact-context-item">
              <span className="label">{c.basedInLabel}</span>
              <span className="value">{t.meta.location}</span>
            </div>
            <div className="contact-context-item">
              <span className="label">{t.profile.languagesLabel}</span>
              <span className="value">{t.profile.languages}</span>
            </div>
          </div>
        </div>

        <Reveal direction="right" delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
