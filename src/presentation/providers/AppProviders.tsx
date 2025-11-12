
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../lib/queryClient'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from '../../routes'

const router = createBrowserRouter(routes)

export default function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
