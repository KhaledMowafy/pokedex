import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {PokemonCard} from "./presentation/components/PokemonCard";
import type { Pokemon } from "./domain/entities/Pokemon";
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

  return (
    <QueryClientProvider client={queryClient}>
      <PokemonCard pokemon={dummyPokemon} />
    </QueryClientProvider>
  );
}

export default App;
