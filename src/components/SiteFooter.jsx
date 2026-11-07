import { useLanguage } from '../i18n/LanguageContext.jsx'
import { links } from '../data/links.js'
import { Icon } from './icons/Icon.jsx'

export function SiteFooter() {
  const { t } = useLanguage()
  const f = t.footer
  const year = new Date().getFullYear()

  const scrollToTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            kofi<span className="dot">.</span>awougno
          </span>
          <p className="footer-tagline">{f.tagline}</p>
        </div>

        <div className="footer-links">
          <a href={`mailto:${links.email}`}>Email</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <button type="button" className="footer-top" onClick={scrollToTop}>
            {f.backToTop}
            <Icon name="arrowUp" size={14} />
          </button>
        </div>

        <div className="footer-meta">
          <span>
            © {year} {t.meta.name}
          </span>
          <span>{t.meta.location}</span>
        </div>
      </div>
    </footer>
  )
}
