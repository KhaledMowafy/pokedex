
import type { PokemonDetail, PokemonSummary } from '../entities/Pokemon';

export interface ListParams {
  limit: number
  offset: number
}

export interface ListResult {
  count: number
  results: PokemonSummary[]
}

export interface PokemonRepository {
  list(params: ListParams): Promise<ListResult>
  getById(id: number | string): Promise<PokemonDetail>
}
