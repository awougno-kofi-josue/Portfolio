import { useEffect, useRef, useState } from 'react'
import { useLanguage } from './i18n/LanguageContext.jsx'
import { navSections } from './data/links.js'
import { Navbar } from './components/Navbar.jsx'
import { ScrollProgress } from './components/ScrollProgress.jsx'
import { Hero } from './components/Hero.jsx'
import { ProfileSection } from './components/ProfileSection.jsx'
import { ResearchInterestsSection } from './components/ResearchInterestsSection.jsx'
import { ExperienceTimeline } from './components/ExperienceTimeline.jsx'
import { ProjectShowcase } from './components/ProjectShowcase.jsx'
import { CertificationLedger } from './components/CertificationLedger.jsx'
import { PublicationsLog } from './components/PublicationsLog.jsx'
import { OutsideTheLab } from './components/OutsideTheLab.jsx'
import { ContactLedger } from './components/ContactLedger.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'

export default function App() {
  const { t, lang } = useLanguage()
  const [activeSection, setActiveSection] = useState(navSections[0])
  const sectionRefs = useRef({})

  useEffect(() => {
    document.title = `${t.meta.name} · ${t.meta.role}`
  }, [t, lang])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 },
    )

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const registerSection = (id) => (el) => {
    sectionRefs.current[id] = el
  }

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <ScrollProgress />
      <main className="main">
        <Hero onNavigate={scrollToSection} />
        <ProfileSection id="profile" registerSection={registerSection('profile')} />
        <ResearchInterestsSection id="research" registerSection={registerSection('research')} />
        <ExperienceTimeline id="experience" registerSection={registerSection('experience')} />
        <ProjectShowcase id="projects" registerSection={registerSection('projects')} />
        <CertificationLedger id="certifications" registerSection={registerSection('certifications')} />
        <PublicationsLog id="publications" registerSection={registerSection('publications')} />
        <OutsideTheLab id="outside" registerSection={registerSection('outside')} />
        <ContactLedger id="contact" registerSection={registerSection('contact')} />
      </main>
      <SiteFooter />
    </>
  )
}
