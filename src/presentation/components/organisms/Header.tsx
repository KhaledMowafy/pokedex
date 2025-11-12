
import { NavLink } from 'react-router-dom'

export default function Header() {
  const link = 'px-3 py-2 rounded-xl text-sm font-medium'
  const active = 'bg-indigo-600 text-white'
  const idle = 'text-slate-700 hover:bg-slate-100'

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="font-bold text-lg">Poké Browser</NavLink>
        <nav className="flex gap-2">
          <NavLink to="/pagination" className={({isActive}) => `${link} ${isActive?active:idle}`}>Pagination</NavLink>
          <NavLink to="/load-more" className={({isActive}) => `${link} ${isActive?active:idle}`}>Load More</NavLink>
        </nav>
      </div>
    </header>
  )
}
