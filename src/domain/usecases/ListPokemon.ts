import type {
  PokemonRepository,
  ListParams,
  ListResult,
} from "../repositories/PokemonRepository";

export class ListPokemons {
  private repo: PokemonRepository;

  constructor(repo: PokemonRepository) {
    this.repo = repo;
  }

  execute(params: ListParams): Promise<ListResult> {
    return this.repo.list(params);
  }
}
