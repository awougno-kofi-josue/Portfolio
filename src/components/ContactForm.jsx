import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { emailjsConfig } from '../data/emailjs.js'
import { links } from '../data/links.js'

const emptyForm = {
  from_name: '',
  reply_to: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const { t } = useLanguage()
  const c = t.contact
  const formRef = useRef(null)
  const [formData, setFormData] = useState(emptyForm)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        { publicKey: emailjsConfig.publicKey },
      )
      setStatus({ type: 'success', message: c.success })
      setFormData(emptyForm)
    } catch (error) {
      console.error('EmailJS:', error)
      setStatus({ type: 'error', message: c.error })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-form-panel">
      <h3 className="contact-form-title">{c.formTitle}</h3>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <input type="hidden" name="to_email" value={links.email} />

        <div className="field-pair">
          <label className="field">
            <span>{c.nameLabel}</span>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder={c.namePlaceholder}
              autoComplete="name"
              required
            />
          </label>

          <label className="field">
            <span>{c.emailFieldLabel}</span>
            <input
              type="email"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              placeholder={c.emailPlaceholder}
              autoComplete="email"
              required
            />
          </label>
        </div>

        <label className="field">
          <span>{c.subjectLabel}</span>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={c.subjectPlaceholder}
            required
          />
        </label>

        <label className="field">
          <span>{c.messageLabel}</span>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            placeholder={c.messagePlaceholder}
            required
          />
        </label>

        {status ? (
          <p className={`form-status ${status.type}`} role={status.type === 'error' ? 'alert' : 'status'}>
            {status.message}
          </p>
        ) : null}

        <button type="submit" className="btn btn-solid btn-submit" disabled={loading}>
          {loading ? c.sending : c.send}
        </button>
      </form>
    </div>
  )
}
