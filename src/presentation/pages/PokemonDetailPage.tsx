import { Link, useParams } from "react-router-dom";
import { usePokemonDetail } from "../hooks/usePokemonDetail";
import { ErrorState } from "../components/ErrorState";
import { StatBar, formatStatLabel } from "../components/StatBar";
import { getTypeColorClasses } from "../utils/typeColors";

export function PokemonDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { pokemon, loading, error, retry } = usePokemonDetail(id);

  return (
    <main className="mx-auto min-h-screen px-4 sm:px-8 md:px-16 lg:px-36 bg-gradient-to-b from-pink-50 to-pink-100 py-6 sm:py-10">
      <Link
        to="/paginated"
        className="mb-6 w-fit flex items-center justify-center gap-1 bg-white border-2 rounded-md border-gray-300 py-1 px-3 text-sm font-semibold text-gray-900 transition hover:text-gray-800"
      >
        <svg
          height="20"
          width="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6 12H18M6 12L11 7M6 12L11 17"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>{" "}
        Back to List
      </Link>

      {error && <ErrorState message={error} onRetry={retry} />}

      {!error && loading && (
        <div className="animate-pulse rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-24 rounded-t-2xl bg-gray-200" />
          <div className="space-y-3 p-6">
            <div className="mx-auto h-32 w-32 rounded-full bg-gray-200" />
            <div className="mx-auto h-3 w-1/2 rounded bg-gray-200" />
          </div>
        </div>
      )}

      {!error && !loading && pokemon && (
        <div className="w-full flex justify-center">
          <div className="overflow-hidden w-full sm:w-10/12 md:w-8/12 lg:w-7/12 rounded bg-white shadow-sm ring-1 ring-black/5">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-5 text-center text-white">
              <h1 className="text-xl font-bold capitalize flex items-center justify-center">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#FFFFFF"
                  stroke-width="3"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                >
                  <path d="M35 14 L20 36 H30 L27 50 L46 26 H35 L38 14 Z" />
                </svg>

                {pokemon.name}
              </h1>
              <p className="text-sm text-white/80">{pokemon.pokedexNumber}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 p-4 sm:p-6 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-44 w-44 sm:h-60 sm:w-60 items-center justify-center rounded-full bg-gray-100">
                  <img
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                    className="h-36 w-36 sm:h-52 sm:w-52 object-contain"
                  />
                </div>
                <div className="flex gap-2">
                  {pokemon.types?.map((type) => (
                    <span
                      key={type}
                      className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${getTypeColorClasses(
                        type
                      )}`}
                    >
                      {type}
                    </span>
                  ))}
                </div>
                <div className="grid w-full grid-cols-2 gap-3">
                  <div className="rounded-xl bg-gray-50 py-3  text-center">
                    <p className="text-xs font-semibold text-gray-600  flex items-center justify-center  gap-1">
                      {" "}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="rotate(90)"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M5.63604 14.1238L7.05026 15.538M8.46447 11.2953L9.87868 12.7096M11.2929 8.46691L12.7071 9.88113M14.1213 5.63849L15.5355 7.0527M2.80762 16.9522L7.05026 21.1948L21.1924 7.0527L16.9498 2.81006L2.80762 16.9522Z"
                            stroke="#4B5563"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      Height
                    </p>
                    <p className="font-semibold text-gray-900">{pokemon.height} m</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 py-3 text-center">
                    <p className="text-xs font-semibold text-gray-600  flex items-center justify-center  gap-1">
                      {" "}
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="#4B5563"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 26 V20 a10 10 0 0 1 20 0 v6" />
                        <rect x="14" y="26" width="36" height="26" rx="6" />
                      </svg>
                      Weight
                    </p>
                    <p className="font-semibold flex items-center justify-center gap-2 text-gray-900">
                      {pokemon.weight} kg
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <h2 className="mb-2 text-sm font-bold text-gray-900">Base Stats</h2>
                  <div className="space-y-2">
                    {pokemon.stats?.map((stat) => (
                      <StatBar
                        key={stat.name}
                        label={formatStatLabel(stat.name)}
                        value={stat.baseStat}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-2 text-md font-bold text-gray-900">Abilities</h2>
                  <ul className="text-sm text-gray-600">
                    {pokemon.abilities?.map((a) => (
                      <li key={a.name} className="font-bold text-xs text-gray-900 mb-4">
                        {a.isHidden ? (
                          <>
                            <span className="bg-gray-100 rounded-full py-1 px-3">
                              {a.name.replace("-", " ")}
                            </span>
                            <span className="ml-1 text-xs font-normal text-gray-500">(Hidden)</span>
                          </>
                        ) : (
                          <span className="border-2 border-gray-100 rounded-full py-1 px-3">
                            {a.name.replace("-", " ")}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-md font-bold text-gray-900">Base Experience</h2>
                  <p className="text-lg font-bold text-purple-600">{pokemon.baseExperience} XP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}