import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'A propos' },
  { to: '/cv', label: 'CV' },
  { to: '/realisations', label: 'Realisations' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4">
        <Link to="/" className="font-heading text-xl font-extrabold tracking-tight text-white">
          K. Y. <span className="text-accent">Awougno</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-[0.22em] ${isActive ? 'text-accent' : 'text-slate-300 hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="inline-flex rounded-full border border-white/10 p-2 text-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Basculer le menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink-soft/95 md:hidden">
          <div className="container-shell flex flex-col py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-sm font-medium ${isActive ? 'bg-accent/10 text-accent' : 'text-slate-200 hover:bg-white/5'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
