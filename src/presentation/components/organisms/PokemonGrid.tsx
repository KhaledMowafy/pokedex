
import PokemonCard from '../molecules/PokemonCard'

export default function PokemonGrid({ items }: { items: Array<{ id: number; name: string; sprite: string }> }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map(p => <PokemonCard key={p.id} {...p} />)}
    </div>
  )
}
