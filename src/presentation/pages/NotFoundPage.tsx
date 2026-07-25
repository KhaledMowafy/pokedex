// presentation/pages/NotFoundPage.tsx
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-b from-gray-50 to-white px-4 text-center">
      <h1 className="text-6xl">🔦</h1>
      <h2 className="text-2xl font-bold text-gray-900">Pokémon Not Found</h2>
      <p className="max-w-sm text-sm text-gray-500">
        Looks like this page wandered off into the tall grass. Let's get you back to the Pokédex.
      </p>
      <Link
        to="/paginated"
        className="mt-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
      >
        ← Back to Pokédex
      </Link>
    </main>
  );
}