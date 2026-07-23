const STACK = [
  {
    tag: 'FE',
    title: 'Frontend',
    items: ['React.js', 'Vite', 'Tailwind CSS', 'HTML5 & CSS3', 'JavaScript (ES6+)', 'Responsive / Mobile-first UI'],
  },
  {
    tag: 'BE',
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API design', 'Cookie-based auth', 'MongoDB & Mongoose', 'CORS & env config'],
  },
  {
    tag: 'TL',
    title: 'Tools & Deployment',
    items: ['Git & GitHub', 'Vercel', 'Render', 'Postman', 'VS Code', 'Cron-job monitoring'],
  },
  {
    tag: 'PL',
    title: 'Beyond the Code',
    items: ['Google Ads / Digital Marketing', 'UI/UX-focused design thinking', 'Physics & analytical reasoning', 'Product-minded problem solving'],
  },
]

// Component-package pin row, purely decorative — echoes a DIP IC package.
function PinRow() {
  return (
    <div className="flex justify-between px-1" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-ink-border" />
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <p className="eyebrow mb-4">Ref. Designator: STK — Skill Set</p>
      <h2 className="text-3xl font-bold text-ivory sm:text-4xl">The stack I build with</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory-muted">
        Each module below is a set of tools I reach for regularly — treat it like a
        parts list for the projects further down the page.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {STACK.map((group) => (
          <div
            key={group.tag}
            className="rounded-xl border border-ink-border bg-ink-surface p-6 transition-colors duration-200 hover:border-copper/50"
          >
            <PinRow />
            <div className="mt-4 flex items-center gap-3">
              <span className="rounded-md border border-copper/40 bg-copper/10 px-2 py-1 font-mono text-[11px] tracking-[0.2em] text-copper">
                {group.tag}
              </span>
              <h3 className="text-lg font-semibold text-ivory">{group.title}</h3>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ivory-muted">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <PinRow />
          </div>
        ))}
      </div>
    </section>
  )
}
