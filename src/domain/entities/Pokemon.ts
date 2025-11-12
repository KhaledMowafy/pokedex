
export interface PokemonSummary {
  id: number
  name: string
  sprite: string
}

export interface PokemonDetail {
  id: number
  name: string
  height: number          // decimeters
  weight: number          // hectograms
  base_experience: number
  sprites: {
    front_default: string | null
    other?: { ['official-artwork']?: { front_default: string | null } }
  }
  types: Array<{ slot: number; type: { name: string; url: string } }>
  stats: Array<{ base_stat: number; effort: number; stat: { name: string; url: string } }>
  abilities: Array<{ ability: { name: string; url: string }; is_hidden: boolean; slot: number }>
}

