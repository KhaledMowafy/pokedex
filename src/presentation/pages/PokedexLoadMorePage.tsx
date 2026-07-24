import { PokedexHeader } from "../components/PokedexHeader";
import { PokemonGrid } from "../components/PokemonGrid";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { ErrorState } from "../components/ErrorState";
import { LoadMoreButton } from "../components/LoadMoreButton";
import { usePokemonLoadMore } from "../hooks/usePokemonLoadMore";

export function PokedexLoadMorePage() {
  const { items, loading, loadingMore, hasMore, error, loadMore, retry } =
    usePokemonLoadMore(20);

  return (
    <main className="mx-auto min-h-screen px-4 sm:px-8 md:px-16 lg:px-36 bg-gradient-to-b from-emerald-50 to-emerald-100 py-6 sm:py-10">
      <PokedexHeader tagline="Discover and explore Pokemon with infinite scroll" />

      {error ? (
        <ErrorState message={error} onRetry={retry} />
      ) : loading ? (
        <LoadingSkeleton count={20} />
      ) : (
        <>
          <PokemonGrid pokemons={items} />
          {hasMore && <LoadMoreButton onClick={loadMore} loading={loadingMore} />}
          <p className="mt-6 text-center text-xs text-gray-400">Showing {items.length} Pokemon</p>
        </>
      )}
    </main>
  );
}