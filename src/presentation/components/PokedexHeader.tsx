import { NavLink } from "react-router-dom";

interface PokedexHeaderProps {
  tagline: string;
}

const linkBase =
  "rounded-full px-4 py-1.5 text-sm font-medium transition";
const activeClasses = "bg-gray-900 text-white";
const inactiveClasses = "bg-white text-gray-600 hover:bg-gray-100";

export function PokedexHeader({ tagline }: PokedexHeaderProps) {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        <span aria-hidden>⚡</span> Pokédex
      </h1>
      <p className="mt-1 px-4 text-xs text-gray-500 sm:text-sm">{tagline}</p>
      <nav className="mt-4 inline-flex flex-wrap justify-center gap-2 rounded-full bg-gray-100/60 p-1">
        <NavLink
          to="/paginated"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          Page Controls
        </NavLink>
        <NavLink
          to="/load-more"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          Infinite Scroll
        </NavLink>
      </nav>
    </header>
  );
}
