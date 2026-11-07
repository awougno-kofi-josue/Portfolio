import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useTheme } from '../i18n/ThemeContext.jsx'
import { navSections } from '../data/links.js'
import { Icon } from './icons/Icon.jsx'

export function Navbar({ activeSection, onNavigate }) {
  const { t, toggle: toggleLang } = useLanguage()
  const { theme, toggle: toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavigate = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="navbar-logo">
          kofi<span className="dot">.</span>awougno
        </span>

        <nav
          id="site-nav"
          className={`navbar-links ${menuOpen ? 'open' : ''}`}
          aria-label={t.meta.navLabel}
        >
          {navSections.map((id) => (
            <button
              key={id}
              type="button"
              className={`navbar-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleNavigate(id)}
              aria-current={activeSection === id ? 'true' : undefined}
            >
              {t.nav[id]}
            </button>
          ))}
        </nav>

        <div className="navbar-controls">
          <button
            type="button"
            className="icon-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.meta.themeToLight : t.meta.themeToDark}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
          </button>
          <button type="button" className="icon-toggle lang-pill" onClick={toggleLang}>
            {t.meta.langToggleLabel}
          </button>
          <button
            type="button"
            className="icon-toggle nav-menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? t.meta.menuCloseLabel : t.meta.menuOpenLabel}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
