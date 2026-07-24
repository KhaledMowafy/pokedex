import type { IPokemonRepository } from "../../domain/repositories/IPokemonRepository";
import { PokeApiRepository } from "../repositories/PokeApiRepository";

// The one place in the app that decides which concrete implementation
// PokeApiRepository for a fake/mock/different-API repo means changing

export const pokemonRepository: IPokemonRepository = new PokeApiRepository();
