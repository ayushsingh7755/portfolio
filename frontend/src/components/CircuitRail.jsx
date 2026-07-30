import { useEffect, useRef, useState } from 'react'

// A vertical "schematic rail" that runs down the left edge of the page.
// Each section is treated like a component on a board, given a reference
// designator (the way real schematics label parts: R1, U2, C3...).
// The node for the section currently in view lights up as the visitor scrolls.
const NODES = [
  { id: 'hero', label: 'SRC' },
  { id: 'about', label: 'ABT' },
  { id: 'skills', label: 'STK' },
  { id: 'projects', label: 'OUT' },
  { id: 'education', label: 'EDU' },
  { id: 'contact', label: 'SIG' },
]

export default function CircuitRail() {
  const [activeIndex, setActiveIndex] = useState(0)
  const railRef = useRef(null)

  useEffect(() => {
    const sections = NODES.map((n) => document.getElementById(n.id)).filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = NODES.findIndex((n) => n.id === entry.target.id)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Section progress"
      ref={railRef}
      className="pointer-events-none fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 lg:flex"
    >
      <div className="relative flex flex-col items-center gap-9 py-4">
        <svg
          className="pointer-events-none absolute left-1/2 top-0 h-full -translate-x-1/2"
          width="2"
          height="100%"
          preserveAspectRatio="none"
        >
          <line x1="1" y1="0" x2="1" y2="100%" stroke="#223040" strokeWidth="2" />
        </svg>
        {NODES.map((node, idx) => (
          <a
            key={node.id}
            href={`#${node.id}`}
            className="pointer-events-auto group relative flex items-center gap-3"
            aria-current={activeIndex === idx ? 'true' : undefined}
            aria-label={`Jump to ${node.id} section`}
          >
            <span
              className={`relative z-10 h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                activeIndex === idx
                  ? 'border-signal bg-signal shadow-[0_0_10px_2px_rgba(72,216,180,0.55)]'
                  : 'border-ink-border bg-ink-surface group-hover:border-copper'
              }`}
            />
            <span
              className={`font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 ${
                activeIndex === idx ? 'text-signal' : 'text-ivory-muted group-hover:text-copper'
              }`}
            >
              {node.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  )
}
