export default function Footer() {
  return (
    <footer className="border-t border-ink-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
        <p className="font-mono text-xs text-ivory-muted">
          © {new Date().getFullYear()} Ayush Singh. Built with the MERN stack.
        </p>
        <p className="font-mono text-xs text-ivory-muted">
          Designed &amp; developed from scratch — no template used.
        </p>
      </div>
    </footer>
  )
}
