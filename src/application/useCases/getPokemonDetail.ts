import type { IPokemonRepository } from "../../domain/repositories/IPokemonRepository";
import type { Pokemon } from "../../domain/entities/Pokemon";

// Plain, framework-free orchestration — takes a repository contract, returns
// domain entities. No React, no fetch, fully unit-testable with a fake repo.
export async function getPokemonDetail(
  repo: IPokemonRepository,
  idOrName: string | number
): Promise<Pokemon> {
  return repo.getById(idOrName);
}
