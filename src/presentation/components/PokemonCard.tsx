import { Link } from "react-router-dom";
import type { Pokemon } from "../../domain/entities/Pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="block rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="mb-3 flex aspect-square items-center justify-center rounded-lg bg-gray-100">
        <img
          src={pokemon.imageUrl}
          alt={pokemon.name}
          className="h-4/5 w-4/5 object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-center text-sm font-semibold capitalize text-gray-900">
        {pokemon.name}
      </p>
      <p className="text-center text-xs text-gray-400">{pokemon.pokedexNumber}</p>
    </Link>
  );
}
