type Props = { label: string; value: number }
const MAX = 255 // PokéAPI base stat cap

export default function StatBar({ label, value }: Props) {
  const pct = Math.min(100, Math.round((value / MAX) * 100))
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-slate-600">
        <span className="capitalize">{label.replace('-', ' ')}</span>
        <span className="tabular-nums">{value}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full rounded-full bg-slate-900/80" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
