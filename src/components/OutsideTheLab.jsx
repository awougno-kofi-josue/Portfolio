import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { Reveal } from './Reveal.jsx'
import { ParallaxMedia } from './ParallaxMedia.jsx'
import football from '../assets/images/football.jpeg'

export function OutsideTheLab({ id, registerSection }) {
  const { t } = useLanguage()
  const o = t.outside

  return (
    <section id={id} ref={registerSection} className="section section--band">
      <SectionHeading index="07" title={o.heading} />

      <div className="outside-layout">
        <Reveal as="p" className="outside-text" direction="left">
          {o.text}
        </Reveal>
        <Reveal as="div" className="outside-photo" direction="right" delay={0.1}>
          <ParallaxMedia className="parallax-media" range={14}>
            <img src={football} alt="Kofi playing football on a weekend match" loading="lazy" />
          </ParallaxMedia>
        </Reveal>
      </div>
    </section>
  )
}
