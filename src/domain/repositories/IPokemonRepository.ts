import type { Pokemon, PokemonListResult } from "../entities/Pokemon";

// Contract only — no implementation, no fetch calls, no framework knowledge.
export interface IPokemonRepository {
  getList(limit: number, offset: number): Promise<PokemonListResult>;
  getById(idOrName: string | number): Promise<Pokemon>;
}
