import { useState } from 'react'
import api from '../api/axios'

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setErrorMsg('Please fill in your name, email, and a message before sending.')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      await api.post('/contact', form)
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err?.response?.data?.message ||
          'Something went wrong sending your message. Please try again or email me directly.'
      )
    }
  }

  return (
    <section id="contact" className="section-shell">
      <p className="eyebrow mb-4">Ref. Designator: SIG — Contact</p>
      <h2 className="text-3xl font-bold text-ivory sm:text-4xl">Let's build something</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory-muted">
        Open to remote MERN stack internships and collaboration. Send a message and
        I'll get back to you, or reach out directly below.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-4">
          <a
            href="mailto:ayushsingh57571@gmail.com"
            className="chip flex items-center justify-between text-sm text-ivory hover:text-copper"
          >
            <span>Email</span>
            <span className="font-mono text-xs text-ivory-muted">ayushsingh57571@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ayush-singhb70525314"
            target="_blank"
            rel="noreferrer"
            className="chip flex items-center justify-between text-sm text-ivory hover:text-copper"
          >
            <span>LinkedIn</span>
            <span className="font-mono text-xs text-ivory-muted">/in/ayush-singhb70525314</span>
          </a>
          <a
            href="https://github.com/ayushsingh7755"
            target="_blank"
            rel="noreferrer"
            className="chip flex items-center justify-between text-sm text-ivory hover:text-copper"
          >
            <span>GitHub</span>
            <span className="font-mono text-xs text-ivory-muted">@ayushsingh7755</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-ivory-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className="w-full min-h-[44px] rounded-md border border-ink-border bg-ink-alt px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-signal"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-ivory-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className="w-full min-h-[44px] rounded-md border border-ink-border bg-ink-alt px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-signal"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-ivory-muted">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-md border border-ink-border bg-ink-alt px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-signal"
              placeholder="Tell me a bit about the opportunity or project..."
            />
          </div>

          <button type="submit" disabled={status === 'loading'} className="btn-primary disabled:opacity-60">
            {status === 'loading' ? 'Sending…' : 'Send message'}
          </button>

          <div role="status" aria-live="polite" className="min-h-[1.5rem] text-sm">
            {status === 'success' && (
              <p className="text-signal">Message sent — thanks for reaching out, I'll reply soon.</p>
            )}
            {status === 'error' && <p className="text-copper">{errorMsg}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
