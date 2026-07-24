import {useState} from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {PokemonCard} from "./presentation/components/PokemonCard";
import {PokemonGrid} from "./presentation/components/PokemonGrid";
import type { Pokemon } from "./domain/entities/Pokemon";
import { LoadingSkeleton } from "./presentation/components/LoadingSkeleton";
import { ErrorState } from "./presentation/components/ErrorState";
import {usePokemonPagination} from "./presentation/hooks/usePokemonPagination";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
    },
  },
});

function App() {
  const dummyPokemon: Pokemon = {
  id: 25,
  name: 'pikachu',
  pokedexNumber: '#025',
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
}
const [page, setPage] = useState(0);

  const { items, totalPages, loading, error, retry } = usePokemonPagination(page, 20);
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonCard pokemon={dummyPokemon} />
      <PokemonGrid pokemons={[dummyPokemon, dummyPokemon, dummyPokemon, dummyPokemon]} />
      <LoadingSkeleton />
      <ErrorState onRetry={() => {}} />
    </QueryClientProvider>
  );
}

export default App;
