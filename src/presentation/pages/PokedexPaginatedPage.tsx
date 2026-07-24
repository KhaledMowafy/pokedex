import { useState } from "react";
import { PokedexHeader } from "../components/PokedexHeader";
import { PokemonGrid } from "../components/PokemonGrid";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
import { ErrorState } from "../components/ErrorState";
import { Pagination } from "../components/Pagination";
import { usePokemonPagination } from "../hooks/usePokemonPagination";

const PAGE_SIZE = 20;

export function PokedexPaginatedPage() {
  const [page, setPage] = useState(0);
  const { items, totalPages, loading, error, retry } = usePokemonPagination(page, PAGE_SIZE);

  return (
    <main className="mx-auto min-h-screen px-4 sm:px-8 md:px-16 lg:px-36 bg-gradient-to-b from-indigo-50 to-indigo-100 py-6 sm:py-10">
      <PokedexHeader tagline="Discover and explore Pokemon with page controls" />

      {error ? (
        <ErrorState message={error} onRetry={retry} />
      ) : loading ? (
        <LoadingSkeleton count={PAGE_SIZE} />
      ) : (
        <>
          <PokemonGrid pokemons={items} />
          <Pagination
            page={page}
            totalPages={totalPages}
            itemsShown={items.length}
            onPageChange={setPage}
          />
        </>
      )}
    </main>
  );
}
