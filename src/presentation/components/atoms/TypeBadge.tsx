type Props = { name: string }

const typeClasses: Record<string, string> = {
  bug: 'bg-lime-100 text-lime-700',
  dark: 'bg-stone-200 text-stone-800',
  dragon: 'bg-indigo-100 text-indigo-700',
  electric: 'bg-yellow-100 text-yellow-700',
  fairy: 'bg-pink-100 text-pink-700',
  fighting: 'bg-red-100 text-red-700',
  fire: 'bg-orange-100 text-orange-700',
  flying: 'bg-sky-100 text-sky-700',
  ghost: 'bg-violet-100 text-violet-700',
  grass: 'bg-green-100 text-green-700',
  ground: 'bg-amber-100 text-amber-700',
  ice: 'bg-cyan-100 text-cyan-700',
  normal: 'bg-slate-100 text-slate-700',
  poison: 'bg-fuchsia-100 text-fuchsia-700',
  psychic: 'bg-rose-100 text-rose-700',
  rock: 'bg-yellow-200 text-yellow-800',
  steel: 'bg-zinc-100 text-zinc-700',
  water: 'bg-blue-100 text-blue-700'
}

export default function TypeBadge({ name }: Props) {
  const cls = typeClasses[name] ?? 'bg-slate-100 text-slate-700'
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold capitalize ${cls}`}>
      {name}
    </span>
  )
}
