import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Loader, Mail, Phone } from 'lucide-react'
let jsx= 'Q4iZZc-j0WZk8dv8F'
let egal= 'service_lum840i'
let egal2= 'template_97lfw5a'
const EMAILJS_PUBLIC_KEY = jsx
const EMAILJS_SERVICE_ID = egal
const EMAILJS_TEMPLATE_ID = egal2

export function ContactForm() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const isConfigured = Boolean(EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    if (!isConfigured) {
      setStatus({
        type: 'error',
        message: "Configuration EmailJS manquante. Ajoutez les variables VITE_EMAILJS_* dans votre fichier .env.",
      })
      setLoading(false)
      return
    }

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })

      setStatus({
        type: 'success',
        message: 'Message envoye avec succes.',
      })
      setFormData({ from_name: '', reply_to: '', subject: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: "Email JS non configuré ou une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.",
      })
      console.error('Erreur EmailJS:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="glass-panel p-8">
      <h2 className="mb-6 text-2xl font-extrabold text-white">Envoyer un message</h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="to_email" value="josueawougno@gmail.com" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="from_name" className="mb-2 block text-sm font-medium text-slate-200">
              Votre nom *
            </label>
            <input
              id="from_name"
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
              placeholder="Kofi Yosua"
            />
          </div>
          <div>
            <label htmlFor="reply_to" className="mb-2 block text-sm font-medium text-slate-200">
              Votre email *
            </label>
            <input
              id="reply_to"
              type="email"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
              placeholder="vous@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-200">
            Sujet *
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
            placeholder="Projet, collaboration, question..."
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
            placeholder="Decrivez votre projet ou votre message..."
          />
        </div>

        {status && (
          <div
            className={`rounded-lg p-4 text-sm font-medium ${
              status.type === 'success'
                ? 'border border-green-500/30 bg-green-500/10 text-green-200'
                : 'border border-red-500/30 bg-red-500/10 text-red-200'
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader size={18} className="animate-spin" />
              Envoi en cours...
            </>
          ) : (
            'Envoyer le message'
          )}
        </button>
      </form>

      <div className="mt-8 border-t border-white/10 pt-8">
        <h3 className="mb-4 text-lg font-bold text-white">Preferez un contact direct ?</h3>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:josueawougno@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition hover:border-accent/50 hover:bg-accent/10"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="tel:+22893947171"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-medium text-white transition hover:border-accent/50 hover:bg-accent/10"
          >
            <Phone size={18} /> Telephone
          </a>
        </div>
      </div>
    </div>
  )
}
