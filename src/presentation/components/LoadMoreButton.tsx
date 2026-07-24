interface LoadMoreButtonProps {
  onClick: () => void;
  loading: boolean;
}

export function LoadMoreButton({ onClick, loading }: LoadMoreButtonProps) {
  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      <button
        onClick={onClick}
        disabled={loading}
        className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 disabled:opacity-60"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Loading more Pokemon...
          </span>
        ) : (
          "Load More"
        )}
      </button>
    </div>
  );
}
