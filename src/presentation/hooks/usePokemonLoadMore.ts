// presentation/hooks/usePokemonLoadMore.ts
import { useCallback, useEffect, useState } from "react";
import { getPokemonList } from "../../application/useCases/getPokemonList";
import { pokemonRepository } from "../../infrastructure/di/container";
import type { Pokemon } from "../../domain/entities/Pokemon";

export function usePokemonLoadMore(pageSize = 20) {
  const [items, setItems] = useState<Pokemon[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true); // initial load only
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextOffset, setNextOffset] = useState(0);

  const loadInitial = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getPokemonList(pokemonRepository, pageSize, 0);
      setItems(result.items);
      setTotal(result.total);
      setNextOffset(pageSize);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load Pokemon");
    } finally {
      setLoading(false);
    }
  }, [pageSize]);

  useEffect(() => {
    loadInitial();
    // Only re-run if pageSize itself changes — loadInitial is intentionally
  }, [pageSize]);

  const loadMore = useCallback(async () => {
    if (loadingMore) return; // guard against double-fire (e.g. rapid double-click)
    setLoadingMore(true);
    setError(null);
    try {
      const result = await getPokemonList(pokemonRepository, pageSize, nextOffset);
      setItems((prev) => {
        // Dedup by id: PokeAPI itself is stable, but this keeps the append
        const seen = new Set(prev.map((p) => p.id));
        const fresh = result.items.filter((p) => !seen.has(p.id));
        return [...prev, ...fresh];
      });
      setTotal(result.total);
      setNextOffset((prevOffset) => prevOffset + pageSize);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load more Pokemon");
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, nextOffset, pageSize]);

  const hasMore = items.length < total;

  return {
    items,
    total,
    loading,
    loadingMore,
    hasMore,
    error,
    loadMore,
    retry: loadInitial,
  };
}