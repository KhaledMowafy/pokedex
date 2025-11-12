
import Card from '../atoms/Card'
import Image from '../atoms/Image'
import { Link } from 'react-router-dom'

export default function PokemonCard({ id, name, sprite }: { id: number; name: string; sprite: string }) {
  return (
    <Link to={`/pokemon/${id}`} className="block focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded-2xl">
      <Card>
        <div className="p-4">
          <div className="aspect-square bg-slate-50 rounded-xl flex items-center justify-center">
            <Image src={sprite} alt={name} className="h-28 w-28 object-contain" />
          </div>
          <div className="mt-3 text-center capitalize font-semibold">{name}</div>
        </div>
      </Card>
    </Link>
  )
}
