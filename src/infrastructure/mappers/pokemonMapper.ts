import type { Pokemon } from "../../domain/entities/Pokemon";

// this file is the ONLY place in the app allowed to know what PokeAPI's JSON actually looks like.

function formatPokedexNumber(id: number): string {
  return `#${String(id).padStart(3, "0")}`;
}

// Maps a single item from the LIST endpoint's detail lookups (basic fields only).
export function mapListItemToPokemon(raw: any): Pokemon {
  return {
    id: raw.id,
    name: raw.name,
    pokedexNumber: formatPokedexNumber(raw.id),
    imageUrl:
      raw.sprites?.other?.["official-artwork"]?.front_default ??
      raw.sprites?.front_default ??
      "",
  };
}

// Maps the DETAIL endpoint's full response.
export function mapDetailToPokemon(raw: any): Pokemon {
  return {
    ...mapListItemToPokemon(raw),
    types: raw.types.map((t: any) => t.type.name),
    height: raw.height / 10, // meters
    weight: raw.weight / 10, // kilograms
    abilities: raw.abilities.map((a: any) => ({
      name: a.ability.name,
      isHidden: a.is_hidden,
    })),
    stats: raw.stats.map((s: any) => ({
      name: s.stat.name,
      baseStat: s.base_stat,
    })),
    baseExperience: raw.base_experience,
  };
}
