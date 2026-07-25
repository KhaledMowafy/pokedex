import { createBrowserRouter, Navigate } from "react-router-dom";
import { PokedexPaginatedPage } from "./pages/PokedexPaginatedPage";
import { PokedexLoadMorePage } from "./pages/PokedexLoadMorePage";
import { PokemonDetailPage } from "./pages/PokemonDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/paginated" replace /> },
  { path: "/paginated", element: <PokedexPaginatedPage /> },
  { path: "/load-more", element: <PokedexLoadMorePage /> },
  { path: "/pokemon/:id", element: <PokemonDetailPage /> },
   { path: "*", element: <NotFoundPage /> }, 
]);
