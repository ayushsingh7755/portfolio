const EDUCATION = [
  {
    tag: 'EDU-01',
    title: 'B.Tech, Information Technology',
    org: 'Maharaja Surajmal Institute of Technology, Delhi',
    period: '2024 – 2028',
    note: 'Currently in first year, building full-stack web applications alongside coursework.',
  },
  {
    tag: 'EDU-02',
    title: 'Prabal Army Super 50 Programme',
    org: 'CSRL',
    period: 'July 2023 – June 2024',
    note: 'Selective mentorship programme completed prior to starting engineering studies.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <p className="eyebrow mb-4">Ref. Designator: EDU — Education</p>
      <h2 className="text-3xl font-bold text-ivory sm:text-4xl">Academic background</h2>

      <div className="mt-12 flex flex-col">
        {EDUCATION.map((edu, idx) => (
          <div key={edu.tag} className="relative flex gap-6 pb-10 last:pb-0">
            <div className="flex flex-col items-center">
              <span className="trace-node shrink-0" aria-hidden="true" />
              {idx !== EDUCATION.length - 1 && (
                <span className="mt-1 w-px flex-1 bg-ink-border" aria-hidden="true" />
              )}
            </div>
            <div className="pb-2">
              <span className="font-mono text-[11px] tracking-[0.2em] text-copper">{edu.tag}</span>
              <h3 className="mt-2 text-lg font-semibold text-ivory">{edu.title}</h3>
              <p className="mt-1 text-sm text-ivory-muted">{edu.org}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-signal">
                {edu.period}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ivory-muted">{edu.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
