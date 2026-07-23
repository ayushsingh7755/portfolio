const TIMELINE = [
  {
    tag: 'EDU',
    title: 'IIT-JEE Preparation',
    period: 'Before 2024',
    body: 'Built a strong foundation in Physics and analytical problem-solving while preparing for the IIT-JEE — the same rigor now carries over into how I break down and debug full-stack systems.',
  },
  {
    tag: 'MKT',
    title: 'Digital Marketing Specialization',
    period: '2023 – 2024',
    body: 'Trained and worked as a Digital Marketer with a specialization in running Google Ads — giving me an eye for user intent, conversion-focused UI, and how a product actually reaches people.',
  },
  {
    tag: 'DEV',
    title: 'Full Stack Development',
    period: '2024 – Present',
    body: 'Completing a dedicated Full Stack Development course alongside my degree, moving from fundamentals to shipping real MERN-stack products such as CampusHub.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-shell">
      <p className="eyebrow mb-4">Ref. Designator: BIO — About</p>
      <h2 className="text-3xl font-bold text-ivory sm:text-4xl">
        From physics fundamentals to full-stack systems
      </h2>

      <p className="mt-6 max-w-3xl text-base leading-relaxed text-ivory-muted sm:text-lg">
        I'm an Information Technology Engineering student at{' '}
        <span className="text-ivory">
          Maharaja Surajmal Institute of Technology (MSIT), Delhi
        </span>{' '}
        (2024–2028), currently in my first year. My path into software wasn't
        linear — I spent years preparing for the IIT-JEE, which gave me a solid
        grounding in Physics and disciplined problem-solving, then moved into
        digital marketing, specializing in Google Ads. Today those threads come
        together in how I build: I care as much about why a product should exist
        and who it's for, as I do about how cleanly its backend is structured.
      </p>

      <p className="mt-4 max-w-3xl text-base leading-relaxed text-ivory-muted sm:text-lg">
        I'm also part of the{' '}
        <span className="text-ivory">Prabal Army Super 50 Programme at CSRL</span>{' '}
        (batch 2023–24), and I actively build and ship MERN-stack projects,
        documenting the process on{' '}
        <a
          href="https://github.com/ayushsingh7755"
          target="_blank"
          rel="noreferrer"
          className="text-signal underline decoration-signal/40 underline-offset-4 hover:text-signal-light"
        >
          GitHub
        </a>{' '}
        and LinkedIn. Right now I'm focused on polishing my flagship project,
        CampusHub, and looking for remote MERN stack internship opportunities.
      </p>

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {TIMELINE.map((item) => (
          <div key={item.title} className="chip flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.2em] text-copper">
                {item.tag}
              </span>
              <span className="font-mono text-[11px] text-ivory-muted">
                {item.period}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-ivory">{item.title}</h3>
            <p className="text-sm leading-relaxed text-ivory-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
