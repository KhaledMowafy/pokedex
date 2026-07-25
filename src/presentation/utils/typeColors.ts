// Maps a Pokemon type name to a Tailwind background/text class pair for its badge.
const TYPE_COLORS: Record<string, string> = {
  normal: "bg-gray-700 text-white",
  fire: "bg-red-600 text-white",
  water: "bg-blue-600 text-white",
  electric: "bg-yellow-600 text-white",
  grass: "bg-green-600 text-white",
  ice: "bg-cyan-600 text-white",
  fighting: "bg-orange-600 text-white",
  poison: "bg-purple-600 text-white",
  ground: "bg-amber-600 text-white",
  flying: "bg-indigo-600 text-white",
  psychic: "bg-pink-600 text-white",
  bug: "bg-lime-600 text-white",
  rock: "bg-stone-600 text-white",
  ghost: "bg-violet-600 text-white",
  dragon: "bg-indigo-600 text-white",
  dark: "bg-gray-800 text-white",
  steel: "bg-slate-600 text-white",
  fairy: "bg-pink-600 text-white",
};

export function getTypeColorClasses(type: string): string {
  return TYPE_COLORS[type] ?? "bg-gray-200 text-gray-700";
}
