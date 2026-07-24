import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PokedexPaginatedPage } from "./presentation/pages/PokedexPaginatedPage";
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
        <PokedexPaginatedPage/>
    </QueryClientProvider>
  );
}

export default App;
