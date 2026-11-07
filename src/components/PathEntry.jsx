import { Reveal } from './Reveal.jsx'

export function PathEntry({ period, title, org, points, text, delay = 0 }) {
  return (
    <Reveal as="article" className="path-entry" delay={delay}>
      <div className="path-meta">
        <span className="path-period">{period}</span>
        <span className="path-org">{org}</span>
      </div>
      <div>
        <h4 className="path-title">{title}</h4>
        {points ? (
          <ul className="path-points">
            {points.map((point) => (
              <li key={point.slice(0, 24)}>{point}</li>
            ))}
          </ul>
        ) : null}
        {text ? <p className="path-text">{text}</p> : null}
      </div>
    </Reveal>
  )
}
