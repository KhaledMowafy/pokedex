import type { Pokemon } from "../../domain/entities/Pokemon";

function formatPokedexNumber(id: number): string {
  return `#${String(id).padStart(3, "0")}`;
}

function extractIdFromUrl(url: string): number {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  return match ? Number(match[1]) : 0;
}

function buildSpriteUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export function mapListEntryToPokemon(entry: { name: string; url: string }): Pokemon {
  const id = extractIdFromUrl(entry.url);
  return {
    id,
    name: entry.name,
    pokedexNumber: formatPokedexNumber(id),
    imageUrl: buildSpriteUrl(id),
  };
}

export function mapDetailToPokemon(raw: any): Pokemon {
  return {
    id: raw.id,
    name: raw.name,
    pokedexNumber: formatPokedexNumber(raw.id),
    imageUrl:
      raw.sprites?.other?.["official-artwork"]?.front_default ?? buildSpriteUrl(raw.id),
    types: raw.types.map((t: any) => t.type.name),
    height: raw.height / 10,
    weight: raw.weight / 10,
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