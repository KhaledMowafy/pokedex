import { useQuery } from "@tanstack/react-query";
import { getPokemonList } from "../../application/useCases/getPokemonList";
import { pokemonRepository } from "../../infrastructure/di/container";

export function usePokemonPagination(page: number, pageSize = 20) {
  const query = useQuery({
    queryKey: ["pokemonList", "page", page, pageSize],
    queryFn: () => getPokemonList(pokemonRepository, pageSize, page * pageSize),
    placeholderData: (prev) => prev,
  });

  const total = query.data?.total ?? 0;
  const totalPages = Math.ceil(total / pageSize);

  return {
    items: query.data?.items ?? [],
    total,
    totalPages,
    loading: query.isLoading,
    error: query.isError ? (query.error as Error).message : null,
    retry: query.refetch,
  };
}
