import type { Pokemon } from "../../domain/entities/Pokemon";
import { PokemonCard } from "./PokemonCard";

interface PokemonGridProps {
  pokemons: Pokemon[];
}

// Breakpoints: 2 cols on mobile, 3 on tablet, 4 on desktop
export function PokemonGrid({ pokemons }: PokemonGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
