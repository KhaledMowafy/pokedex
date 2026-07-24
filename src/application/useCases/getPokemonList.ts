import type { IPokemonRepository } from "../../domain/repositories/IPokemonRepository";
import type { PokemonListResult } from "../../domain/entities/Pokemon";

// Plain, framework-free orchestration — takes a repository contract, returns
// domain entities. No React, no fetch, fully unit-testable with a fake repo.
export async function getPokemonList(
  repo: IPokemonRepository,
  limit: number,
  offset: number
): Promise<PokemonListResult> {
  return repo.getList(limit, offset);
}
