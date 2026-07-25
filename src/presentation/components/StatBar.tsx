interface StatBarProps {
  label: string;
  value: number;
  max?: number;
}

const STAT_LABELS: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  speed: "Speed",
};

export function formatStatLabel(statName: string): string {
  return STAT_LABELS[statName] ?? statName;
}

export function StatBar({ label, value, max = 150 }: StatBarProps) {
  const percent = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="flex w-full items-center justify-between">
        <span className="w-24 shrink-0 text-xs font-bold text-gray-900">{label}</span>
        <span className="w-8 shrink-0 text-right text-xs font-bold text-gray-900">{value}</span>
      </div>
      <div className="w-full shrink-0 rounded-full bg-gray-100" style={{ height: "6px" }}>
        <div
          className="h-full rounded-full bg-gray-900"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}