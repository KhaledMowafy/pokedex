import type { IPokemonRepository } from "../../domain/repositories/IPokemonRepository";
import type { Pokemon, PokemonListResult } from "../../domain/entities/Pokemon";
import { mapListItemToPokemon, mapDetailToPokemon } from "../mappers/pokemonMapper";

const BASE_URL = "https://pokeapi.co/api/v2";

export class PokeApiRepository implements IPokemonRepository {
  async getList(limit: number, offset: number): Promise<PokemonListResult> {
    const res = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!res.ok) throw new Error(`Failed to fetch Pokemon list (status ${res.status})`);
    const json = await res.json();

    // The list endpoint only returns { name, url } pairs — fetch each
    // detail so cards can show sprites, which the reference design requires.
    const details = await Promise.all(
      json.results.map((entry: { url: string }) =>
        fetch(entry.url).then((r) => {
          if (!r.ok) throw new Error(`Failed to fetch Pokemon detail (status ${r.status})`);
          return r.json();
        })
      )
    );

    return {
      items: details.map(mapListItemToPokemon),
      total: json.count,
    };
  }

  async getById(idOrName: string | number): Promise<Pokemon> {
    const res = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
    if (!res.ok) throw new Error(`Failed to fetch Pokemon (status ${res.status})`);
    const json = await res.json();
    return mapDetailToPokemon(json);
  }
}
