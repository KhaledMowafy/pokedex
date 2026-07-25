interface PaginationProps {
  page: number; // zero-indexed
  totalPages: number;
  itemsShown: number;
  onPageChange: (page: number) => void;
}

// Builds a compact page-number list like "1 2 3 4 5 ... 66", collapsing the
// middle into an ellipsis once there are too many pages to show at once.
function buildPageList(current: number, total: number): (number | "ellipsis")[] {
  const maxVisible = 5;
  if (total <= maxVisible + 1) {
    return Array.from({ length: total }, (_, i) => i);
  }
  if (current < maxVisible - 1) {
    return [
      ...Array.from({ length: maxVisible }, (_, i): number | "ellipsis" => i),
      "ellipsis",
      total - 1,
    ];
  }
  const middle: (number | "ellipsis")[] = [0, "ellipsis", current - 1, current, current + 1];
  return middle.filter((p) => typeof p !== "number" || (p >= 0 && p < total));
}

export function Pagination({ page, totalPages, itemsShown, onPageChange }: PaginationProps) {
  const pages = buildPageList(page, totalPages);
  const isFirst = page === 0;
  const isLast = page >= totalPages - 1;

  const navBtn = (disabled: boolean) =>
    `shrink-0 rounded-full border px-3 py-1.5 text-sm font-medium transition cursor-pointer ${
      disabled
        ? "border-gray-200 bg-gray-100 text-gray-400"
        : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      {/* Mobile: compact Prev / current / Next, always fits on one line */}
      <div className="flex sm:hidden items-center justify-center gap-2">
        <button onClick={() => onPageChange(page - 1)} disabled={isFirst} className={navBtn(isFirst)}>
          ‹
        </button>
        <span className="h-8 w-8 flex items-center justify-center rounded-sm border border-gray-900 bg-gray-900 text-sm font-medium text-white">
          {page + 1}
        </span>
        <span className="text-sm text-gray-400">of {totalPages}</span>
        <button onClick={() => onPageChange(page + 1)} disabled={isLast} className={navBtn(isLast)}>
          ›
        </button>
      </div>

      {/* Desktop / tablet: full page list */}
      <div className="hidden sm:flex items-center justify-center gap-1">
        <button onClick={() => onPageChange(page - 1)} disabled={isFirst} className={navBtn(isFirst)}>
          ‹ Previous
        </button>
        {pages.map((p, i) =>
          p === "ellipsis" ? (
            <span key={`e-${i}`} className="px-2 text-sm text-gray-400">
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`h-8 w-8 rounded-sm border text-sm font-medium transition ${
                p === page
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {p + 1}
            </button>
          )
        )}
        <button onClick={() => onPageChange(page + 1)} disabled={isLast} className={navBtn(isLast)}>
          Next ›
        </button>
      </div>

      <p className="text-xs text-gray-400">
        Page {page + 1} of {totalPages} ({itemsShown} Pokemon shown)
      </p>
    </div>
  );
}