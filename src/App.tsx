import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {PokedexLoadMorePage} from "./presentation/pages/PokedexLoadMorePage";
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
        <PokedexLoadMorePage />
    </QueryClientProvider>
  );
}

export default App;
