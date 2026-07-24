// presentation/hooks/usePokemonPagination.ts
import { useCallback, useEffect, useState } from "react";
import { getPokemonList } from "../../application/useCases/getPokemonList";
import { pokemonRepository } from "../../infrastructure/di/container";
import type { Pokemon } from "../../domain/entities/Pokemon";

export function usePokemonPagination(page: number, pageSize = 20) {
  const [items, setItems] = useState<Pokemon[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPage = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getPokemonList(pokemonRepository, pageSize, page * pageSize);
      setItems(result.items);
      setTotal(result.total);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load Pokemon");
    } finally {
      setLoading(false);
    }
  }, [page, pageSize]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  const totalPages = Math.ceil(total / pageSize);

  return { items, total, totalPages, loading, error, retry: fetchPage };
}