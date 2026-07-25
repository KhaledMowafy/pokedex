import { useQuery } from "@tanstack/react-query";
import { getPokemonDetail } from "../../application/useCases/getPokemonDetail";
import { pokemonRepository } from "../../infrastructure/di/container";

export function usePokemonDetail(idOrName: string | number | undefined) {
  const query = useQuery({
    queryKey: ["pokemon", idOrName],
    queryFn: () => getPokemonDetail(pokemonRepository, idOrName!),
    enabled: idOrName !== undefined,
  });

  return {
    pokemon: query.data ?? null,
    loading: query.isLoading,
    error: query.isError ? (query.error as Error).message : null,
    retry: query.refetch,
  };
}
