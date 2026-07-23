const PROJECTS = [
  {
    tag: 'OUT-01',
    name: 'CampusHub',
    role: 'Flagship Project',
    description:
      'A full-stack MERN peer-to-peer campus marketplace where students list, bid on, and buy items directly from each other. Built end to end — schema design, auth, and a neon-accented dark UI.',
    highlights: [
      'Bid/buy negotiation system with real-time-feeling dashboards',
      'Product listings with image carousels and smart contact routing (WhatsApp / call / Gmail deep links)',
      'Cookie-based authentication and role-aware account settings (avatar, password, profile updates)',
      'Mobile-first responsive refactor across the component library using Tailwind breakpoints',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    deploy: 'Frontend on Vercel · Backend on Render',
    links: {
      live: 'https://campus-hub-84sr.vercel.app',
      code: 'https://github.com/ayushsingh7755/Campus-Hub',
    },
  },
  {
    tag: 'OUT-02',
    name: 'Natural Products E-commerce Platform',
    role: 'Full Stack Project',
    description:
      'A MERN-based e-commerce storefront for natural products, covering the full purchase journey from browsing to checkout, with a clean, trust-focused visual style distinct from CampusHub.',
    highlights: [
      'Custom-styled login and registration flows',
      'Backend data models and controllers aligned for consistent product & order handling',
      'Structured for straightforward extension into payments and order tracking',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    deploy: 'In active development',
    links: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <p className="eyebrow mb-4">Ref. Designator: OUT — Projects</p>
      <h2 className="text-3xl font-bold text-ivory sm:text-4xl">Things I've built</h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory-muted">
        Selected work from my MERN stack journey — shipped, deployed, and still
        being refined.
      </p>

      <div className="mt-12 flex flex-col gap-8">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="grid gap-6 rounded-xl border border-ink-border bg-ink-surface p-6 sm:p-8 lg:grid-cols-[220px_1fr]"
          >
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] text-copper">
                {project.tag}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-ivory">{project.name}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-signal">
                {project.role}
              </p>
              <p className="mt-4 text-xs text-ivory-muted">{project.deploy}</p>

              {project.links && (
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-signal underline decoration-signal/40 underline-offset-4 hover:text-signal-light"
                  >
                    Live demo ↗
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-ivory-muted underline decoration-ink-border underline-offset-4 hover:text-copper"
                  >
                    Source code ↗
                  </a>
                </div>
              )}
            </div>

            <div>
              <p className="text-sm leading-relaxed text-ivory-muted sm:text-base">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-col gap-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm leading-relaxed text-ivory-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-ink-border px-2.5 py-1 font-mono text-[11px] text-ivory-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <a href="https://github.com/ayushsingh7755" target="_blank" rel="noreferrer" className="btn-secondary">
          See more on GitHub
        </a>
      </div>
    </section>
  )
}
