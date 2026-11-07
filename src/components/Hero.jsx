import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { Icon } from './icons/Icon.jsx'
import headshot from '../assets/images/headshot.jpeg'

const symbols = [
  { glyph: '∂', top: '18%', left: '8%', size: '2.4rem', delay: '0s' },
  { glyph: '∇', top: '68%', left: '14%', size: '3rem', delay: '2s' },
  { glyph: '∑', top: '24%', left: '82%', size: '3.4rem', delay: '1s' },
  { glyph: '∫', top: '72%', left: '86%', size: '2.6rem', delay: '3s' },
  { glyph: 'π', top: '46%', left: '92%', size: '2rem', delay: '4.5s' },
  { glyph: 'λ', top: '10%', left: '48%', size: '1.8rem', delay: '2.5s' },
]

export function Hero({ onNavigate }) {
  const { t } = useLanguage()
  const typed = useTypewriter(t.hero.roles)
  const reducedMotion = useReducedMotion()

  return (
    <section className="hero">
      <div className="hero-symbols" aria-hidden="true">
        {symbols.map((s) => (
          <span
            key={s.glyph}
            className="hero-symbol"
            style={{ top: s.top, left: s.left, fontSize: s.size, animationDelay: s.delay }}
          >
            {s.glyph}
          </span>
        ))}
      </div>

      <div className="hero-layout">
        <motion.div
          className="hero-content"
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="hero-kicker">
            {t.hero.kicker}
            <span className="cursor" />
          </p>
          <h1 className="hero-name">{t.meta.name}</h1>
          <p className="hero-role">
            <span className="typed-accent">{typed}</span>
            <span aria-hidden="true">&nbsp;</span>
          </p>
          <p className="hero-lede">{t.hero.lede}</p>

          <div className="hero-actions">
            <button type="button" className="btn btn-solid" onClick={() => onNavigate('research')}>
              {t.hero.ctaResearch}
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => onNavigate('contact')}>
              {t.hero.ctaContact}
            </button>
          </div>
        </motion.div>

        <motion.figure
          className="hero-portrait"
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={headshot} alt={t.hero.portraitAlt} />
        </motion.figure>
      </div>

      <motion.div
        className="hero-scroll-cue"
        animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
        transition={reducedMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon name="chevronDown" size={14} />
        {t.hero.scrollCue}
      </motion.div>
    </section>
  )
}
