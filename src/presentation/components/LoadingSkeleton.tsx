interface LoadingSkeletonProps {
  count?: number;
}

// Mirrors PokemonCard's shape (image box + two text lines) so the grid
// doesn't visibly jump when real data replaces the skeleton.
export function LoadingSkeleton({ count = 20 }: LoadingSkeletonProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse rounded-xl bg-white p-3 ring-1 ring-black/5">
          <div className="mb-3 aspect-square rounded-lg bg-gray-200" />
          <div className="mx-auto mb-1.5 h-3 w-3/4 rounded bg-gray-200" />
          <div className="mx-auto h-2.5 w-1/2 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
