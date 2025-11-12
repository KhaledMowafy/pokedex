import { useInfiniteQuery } from "@tanstack/react-query";
// import Spinner from '../components/atoms/Spinner'
import { SkeletonCard } from "../components/atoms/Skeleton";
import ErrorState from "../components/atoms/ErrorState";
import PokemonGrid from "../components/organisms/PokemonGrid";
import Button from "../components/atoms/Button";
import { PokeApiPokemonRepository } from "../../infrastructure/repositories/PokeApiPokemonRepository";

const repo = new PokeApiPokemonRepository();
const PAGE_SIZE = 12;

export default function LoadMoreView() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["infinite-list"],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      repo.list({ limit: PAGE_SIZE, offset: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const loaded = allPages.reduce((sum, p) => sum + p.results.length, 0);
      return loaded < lastPage.count ? loaded : undefined;
    },
  });

  if (isLoading)
    return (
      <div className="space-y-4 flex justify-between">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  if (isError)
    return (
      <ErrorState
        message={(error as Error).message}
        onRetry={() => refetch()}
      />
    );

  const items = data!.pages.flatMap((p) => p.results);

  return (
    <div className="space-y-4">
      <PokemonGrid items={items} />
      <div className="flex justify-center">
        <Button
          className="cursor-pointer"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading…"
            : hasNextPage
            ? "Load More"
            : "No more Pokémon"}
        </Button>
      </div>
    </div>
  );
}
