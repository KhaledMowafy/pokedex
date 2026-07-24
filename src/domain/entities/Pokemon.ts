// Clean, framework-agnostic shape of a Pokemon used across the entire app.

export interface PokemonStat {
  name: string;
  baseStat: number;
}

export interface Pokemon {
  id: number;
  name: string;
  pokedexNumber: string;
  imageUrl: string;
  types?: string[];
  height?: number;
  weight?: number;
  abilities?: { name: string; isHidden: boolean }[];
  stats?: PokemonStat[];
  baseExperience?: number;
}

export interface PokemonListResult {
  items: Pokemon[];
  total: number;
}
