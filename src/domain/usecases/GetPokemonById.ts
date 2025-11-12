import type { PokemonRepository } from "../repositories/PokemonRepository";
import type { PokemonDetail } from "../entities/Pokemon";

export class GetPokemonById {
  private repo: PokemonRepository;
  constructor(repo: PokemonRepository) {
    this.repo = repo;
  }

  execute(id: number | string): Promise<PokemonDetail> {
    return this.repo.getById(id);
  }
}
