interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}

export function ErrorState({
  message = "Something went wrong while loading Pokemon.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-6 py-12 text-center shadow-sm ring-1 ring-black/5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
        <span className="text-3xl" aria-hidden>
          😵
        </span>
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-gray-900">Oops! Something went wrong</h3>
        <p className="max-w-xs text-sm text-gray-500">{message}</p>
      </div>
      <button
        onClick={onRetry}
        className="mt-1 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700 active:scale-95"
      >
        <span aria-hidden>↻</span>
        Try Again
      </button>
    </div>
  );
}