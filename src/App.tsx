import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokemonDetailPage } from "./presentation/pages/PokemonDetailPage";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <PokemonDetailPage />
    </QueryClientProvider>
  );
}

export default App;
