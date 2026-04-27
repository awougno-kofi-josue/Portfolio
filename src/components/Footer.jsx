export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-soft/70">
      <div className="container-shell flex flex-col items-start justify-between gap-4 py-8 text-sm text-slate-400 md:flex-row md:items-center">
        <p> &copy; {new Date().getFullYear()} Kofi Yosua Awougno - Portfolio.</p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:josueawougno@gmail.com" className="hover:text-accent">josueawougno@gmail.com</a>
          <a href="tel:+22893947171" className="hover:text-accent">+228 93 94 71 71</a>
        </div>
      </div>
    </footer>
  )
}
