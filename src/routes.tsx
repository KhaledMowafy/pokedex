
import Layout from './presentation/pages/Layout'
import PaginationView from './presentation/pages/PaginationView'
import LoadMoreView from './presentation/pages/LoadMoreView'
import PokemonDetailPage from './presentation/pages/PokemonDetailsPage'
import NotFound from './presentation/pages/NotFound'
import { type RouteObject, Navigate } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/pagination" replace /> },
      { path: 'pagination', element: <PaginationView /> },
      { path: 'load-more', element: <LoadMoreView /> },
      { path: 'pokemon/:id', element: <PokemonDetailPage /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]
