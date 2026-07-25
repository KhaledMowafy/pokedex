// presentation/hooks/usePokemonDetail.ts
import { useCallback, useEffect, useState } from "react";
import { getPokemonDetail } from "../../application/useCases/getPokemonDetail";
import { pokemonRepository } from "../../infrastructure/di/container";
import type { Pokemon } from "../../domain/entities/Pokemon";

export function usePokemonDetail(idOrName: string | number | undefined) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDetail = useCallback(async () => {
    if (idOrName === undefined) return;
    setLoading(true);
    setError(null);
    try {
      const result = await getPokemonDetail(pokemonRepository, idOrName);
      setPokemon(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load this Pokemon");
    } finally {
      setLoading(false);
    }
  }, [idOrName]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  return { pokemon, loading, error, retry: fetchDetail };
}