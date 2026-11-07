import { useLanguage } from '../i18n/LanguageContext.jsx'
import { SectionHeading } from './SectionHeading.jsx'
import { Reveal } from './Reveal.jsx'
import { Icon } from './icons/Icon.jsx'
import certificateDataScience from '../assets/images/certificate-data-science.png'
import badgeBigData from '../assets/images/badge-big-data.png'
import badgeChallengeTechSante from '../assets/images/badge-challenge-tech-sante.png'
import badgeDclicWeb from '../assets/images/Badge_Développement_Web.png'
import datacampCertificate from '../assets/images/datacamp-introduction-relational-databases-sql.png'

const credentialImages = {
  'foundations-data-science': certificateDataScience,
  'big-data-fundamentals': badgeBigData,
  'challenge-tech-sante': badgeChallengeTechSante,
  'dclic-web-development': badgeDclicWeb,
  'datacamp-introduction-relational-databases-sql': datacampCertificate,
}

function blockContextActions(event) {
  event.preventDefault()
}

function ProtectedImage({ src, alt, className = '' }) {
  return (
    <div
      className={`cert-protected ${className}`.trim()}
      onContextMenu={blockContextActions}
      onDragStart={blockContextActions}
    >
      <img src={src} alt={alt} draggable="false" loading="lazy" />
    </div>
  )
}

export function CertificationLedger({ id, registerSection }) {
  const { t } = useLanguage()
  const c = t.certifications
  const featured = c.items.find((item) => item.id === 'foundations-data-science') ?? c.items[0]
  const badgeItems = c.items.filter((item) => item.hasImage && item.id !== featured.id)
  const textItems = c.items.filter((item) => !item.hasImage)
  const featuredImage = credentialImages[featured.id] ?? certificateDataScience

  return (
    <section id={id} ref={registerSection} className="section">
      <SectionHeading index="05" title={c.heading} />
      <p className="cert-intro">{c.intro}</p>

      <Reveal as="div" className="cert-featured">
        <div>
          <div className="cert-featured-media">
            <ProtectedImage
              src={featuredImage}
              alt={`${featured.title} certificate, issued by ${featured.issuer}`}
              className="cert-featured-image"
            />
            <div className="cert-watermark" aria-hidden="true">
              <span>KOFI YOSUA AWOUGNO · {featured.date}</span>
            </div>
          </div>
          <p className="cert-protected-notice">
            <Icon name="lock" size={13} />
            {c.protectedNotice}
          </p>
        </div>

        <div className="cert-detail">
          <h3>{featured.title}</h3>
          <p className="issuer">{featured.issuer}</p>
          <span className="date">{featured.date}</span>
          {featured.verifyLink ? (
            <a className="external-link" href={featured.verifyLink} target="_blank" rel="noreferrer">
              {featured.verifyLabel}
              <Icon name="arrowUpRight" size={14} />
            </a>
          ) : null}
        </div>
      </Reveal>

      <div className="cert-badges" aria-label={c.badgesLabel}>
        <h3 className="cert-badges-heading">{c.badgesLabel}</h3>
        <div className="cert-badge-grid">
          {badgeItems.map((item, i) => {
            const image = credentialImages[item.id]
            const hasLink = Boolean(item.verifyLink)
            return (
              <Reveal as="article" className="cert-badge" key={item.id} delay={i * 0.06}>
                <ProtectedImage
                  src={image}
                  alt={`${item.title}, ${item.issuer}`}
                  className="cert-badge-image"
                />
                <div className="cert-badge-content">
                  <h3>{item.title}</h3>
                  <p className="issuer">{item.issuer}</p>
                  <span className="cert-date">{item.date}</span>
                  {hasLink ? (
                    <a className="external-link" href={item.verifyLink} target="_blank" rel="noreferrer">
                      {item.verifyLabel}
                      <Icon name="arrowUpRight" size={14} />
                    </a>
                  ) : null}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className="cert-list">
        {textItems.map((item, i) => (
          <Reveal as="div" className="cert-row" key={item.id} delay={i * 0.08}>
            <div className="cert-row-main">
              <h3>{item.title}</h3>
              <span className="issuer">
                {item.issuer}
                {item.date ? <span className="cert-date"> · {item.date}</span> : null}
              </span>
            </div>
            {item.verifyLink ? (
              <a className="external-link cert-row-link" href={item.verifyLink} target="_blank" rel="noreferrer">
                {item.verifyLabel}
                <Icon name="arrowUpRight" size={14} />
              </a>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
