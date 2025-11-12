
import { http } from '../http/httpClient'
import type { PokemonRepository, ListParams, ListResult } from '../../domain/repositories/PokemonRepository'
import type { PokemonDetail } from '../../domain/entities/Pokemon'
import { idFromUrl, spriteUrlFromId } from '../../utils/pokemon'

export class PokeApiPokemonRepository implements PokemonRepository {
  async list({ limit, offset }: ListParams): Promise<ListResult> {
    const data = await http.get<{ count: number; results: Array<{ name: string; url: string }> }>(
      `/pokemon?limit=${limit}&offset=${offset}`
    )
    const results = data.results.map(r => {
      const id = idFromUrl(r.url)
      return { id, name: r.name, sprite: spriteUrlFromId(id) }
    })
    return { count: data.count, results }
  }

  async getById(id: number | string): Promise<PokemonDetail> {
    return http.get(`/pokemon/${id}`)
  }
}
