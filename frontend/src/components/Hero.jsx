export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[60dvh] flex-col justify-center overflow-hidden px-6 pt-24 sm:px-8"
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
          Full Stack Developer &amp; Information Technology Engineering Student
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-muted sm:text-lg">
         Full Stack Developer building platforms that transform ambitious ideas into scalable digital products.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        
      </div>
    </section>
  )
}
