import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemonList } from "../../application/useCases/getPokemonList";
import { pokemonRepository } from "../../infrastructure/di/container";
import type { Pokemon } from "../../domain/entities/Pokemon";

export function usePokemonLoadMore(pageSize = 20) {
  const query = useInfiniteQuery({
    queryKey: ["pokemonList", "infinite", pageSize],
    queryFn: ({ pageParam }) => getPokemonList(pokemonRepository, pageSize, pageParam * pageSize),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const loadedCount = allPages.length * pageSize;
      return loadedCount < lastPage.total ? allPages.length : undefined;
    },
  });

  const items: Pokemon[] = query.data?.pages.flatMap((page) => page.items) ?? [];
  const total = query.data?.pages[0]?.total ?? 0;

  return {
    items,
    total,
    loading: query.isLoading,
    loadingMore: query.isFetchingNextPage,
    hasMore: Boolean(query.hasNextPage),
    error: query.isError ? (query.error as Error).message : null,
    loadMore: query.fetchNextPage,
    retry: query.refetch,
  };
}
