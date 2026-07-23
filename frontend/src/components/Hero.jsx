export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-24 sm:px-8"
    >
      {/* Schematic corner marks — signature framing device */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-24 hidden h-6 w-6 border-l border-t border-ink-border opacity-60 sm:block"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-24 hidden h-6 w-6 border-r border-t border-ink-border opacity-60 sm:block"
      />

      <div className="mx-auto w-full max-w-5xl">
        <p className="eyebrow mb-6 flex items-center gap-3">
          <span className="trace-node" aria-hidden="true" />
          Ref. Designator: SRC — Full Stack Engineer
        </p>

        <h1 className="font-sans text-5xl font-bold leading-[1.05] tracking-tight text-ivory sm:text-7xl">
          Ayush Singh
        </h1>

        <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-copper sm:text-lg">
          MERN Stack Developer &amp; Information Technology Engineering Student
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-muted sm:text-lg">
          I build full-stack web applications end to end — from React interfaces to
          Express APIs and MongoDB data models. Currently pursuing a B.Tech in
          Information Technology at Maharaja Surajmal Institute of Technology, Delhi,
          while shipping production-style projects like{' '}
          <span className="text-ivory">CampusHub</span>, a peer-to-peer campus
          marketplace.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-ink-border pt-8 sm:grid-cols-4">
          {[
            { dt: 'Based in', dd: 'Delhi, India' },
            { dt: 'Focus', dd: 'MERN Stack' },
            { dt: 'Studying', dd: 'B.Tech IT · 2024–28' },
            { dt: 'Also', dd: 'Digital Marketing' },
          ].map((item) => (
            <div key={item.dt}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ivory-muted">
                {item.dt}
              </dt>
              <dd className="mt-1 text-sm text-ivory">{item.dd}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
