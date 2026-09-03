const PROJECTS = [
  {
    tag: "OUT-01",
    name: "CampusHub",
    role: "Flagship Project",
    description:
      "A full-stack MERN peer-to-peer campus marketplace where students list, bid on, and buy items directly from each other. Built end to end — schema design, auth, and a neon-accented dark UI.",
    highlights: [
      "Bid/buy negotiation system with real-time-feeling dashboards",
      "Product listings with image carousels and smart contact routing (WhatsApp / call / Gmail deep links)",
      "Cookie-based authentication and role-aware account settings (avatar, password, profile updates)",
      "Mobile-first responsive refactor across the component library using Tailwind breakpoints",
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    
    links: {
      live: "https://campus-hub-84sr.vercel.app",
      code: "https://github.com/ayushsingh7755/Campus-Hub",
    },
  },
   {
    tag: "OUT-02",
    name: "Ocean Sentinel",
    role: "Full Stack Project",
    description:
      " AI powered MERN-stack application for government/marine research agencies to automatically analyze Side-Scan Sonar (SSS) imagery, detect ghost nets, pipes, cylinders, shipwrecks, and unknown artificial anomalies through our ai detection model",
    highlights: [
  "AI-powered sonar image analysis for detecting ghost nets, pipes, cylinders, shipwrecks, and underwater debris",

  "YOLO-based object detection with confidence scoring and bounding-box visualization on sonar imagery",

  "Interactive geospatial dashboard with GPS-tagged anomaly detection and risk-based map markers",

  "Automated hazard scoring, anomaly classification, and downloadable JSON/CSV detection reports",

  "End-to-end sonar analysis workflow with image upload, preprocessing, AI detection, filtering, and results visualization",

  "Responsive research dashboard with mission history, detection analytics, real-time-feeling analysis progress, and detailed anomaly reports",
],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express","Framer Motion","Recharts","CORS","JWT"],
    
    links: {
      live: "https://ocean-sentinel-lemon.vercel.app",
      code: "https://github.com/ayushsingh7755/ocean-sentinel",
    },
  },
  {
    tag: "OUT-03",
    name: "Rivbond",
    role: "Full Stack Project",
    description:
      "A MERN-based e-commerce clothing product, covering the full purchase journey from browsing to checkout, with a clean, trust-focused visual style.",
    highlights: [
      "Custom-styled login and registration flows",
      "3D product  image view",
      "Backend data models and controllers aligned for consistent product & order handling",
      "Structured for straightforward extension into payments and order tracking",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    
    links: {
      live: "https://rivbond.vercel.app/",
      code: "https://github.com/ayushsingh7755/rivbond",
    },
  },
  {
    tag: "OUT-04",
    name: "MindFul News",
    role: "Full Stack Project",
    description:
      'MindfulNews is a smart news aggregator designed to combat "doom-scrolling." By analyzing the sentiment of global headlines, it allows users to filter news based on their emotional preference—whether they want to see positive, neutral, or critical updates.',
    highlights: [
      "Sophisticated filtering logic categorizes news into Positive, Negative, or Neutral buckets.",
      "Users can toggle filters to customize their reading experience.",
      "Fetches live news data using the NewsAPI.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    
    links: {
      live: "https://mindful-news.vercel.app",
      code: "https://github.com/ayushsingh7755/Mindful-News",
    },
  },
  {
    tag: "OUT-05",
    name: "Ankita Organic",
    role: "Full Stack Project",
    description:
      'Ankita Organic is a natural-food storefront with product browsing, search/category filters, product details, cart, JWT login/signup, protected checkout, COD ordering, order history, stock control and owner-ready product APIs.',
    highlights: [
      "JWT-based login/signup with protected routes",
      "Checkout is protected behind auth",
      "Cash-on-delivery ordering, order history, and stock control built in",
      "Online payments aren't hardcoded yet — Razorpay/Stripe can be added later using backend-only secret keys"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    
    links: {
      live: "https://ankitaorganic.com",
      code: "https://github.com/ayushsingh7755/ankita-organic",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <p className="eyebrow mb-4">Ref. Designator: OUT — Projects</p>
      <h2 className="text-3xl font-bold text-ivory sm:text-4xl">
        Things I've built
      </h2>

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
              <h3 className="mt-2 text-xl font-semibold text-ivory">
                {project.name}
              </h3>
              
              <p className="mt-4 text-xs text-ivory-muted">{project.deploy}</p>

              {project.links && (
                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-signal underline decoration-signal/40 underline-offset-4 hover:text-signal-light"
                  >
                    Visit↗
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
                  <li
                    key={h}
                    className="flex gap-2 text-sm leading-relaxed text-ivory-muted"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper"
                      aria-hidden="true"
                    />
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

     
    </section>
  );
}
