
export function SkeletonCard() {
  return (
    <div className="rounded-2xl w-1/5 bg-white shadow-sm ring-1 ring-slate-200 p-4 animate-pulse">
      <div className="w-full aspect-square bg-slate-200 rounded-xl mb-3" />
      <div className="h-4 w-1/2 bg-slate-200 rounded" />
    </div>
  )
}
