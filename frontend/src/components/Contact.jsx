import { useState } from 'react'
import api from '../api/axios'

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  

 

  return (
    <section id="contact" className="section-shell">
      <p className="eyebrow mb-4">Ref. Designator: SIG — Contact</p>
      <h2 className="text-3xl font-bold text-ivory sm:text-4xl">Let's build something</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory-muted">
        Open to remote MERN stack internships and collaboration. Reach out directly below.
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

      </div>
    </section>
  )
}
