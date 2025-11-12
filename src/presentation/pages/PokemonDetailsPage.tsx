import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'
import Card from '../../presentation/components/atoms/Card'
import ErrorState from '../../presentation/components/atoms/ErrorState'
import Spinner from '../../presentation/components/atoms/Spinner'
import TypeBadge from '../../presentation/components/atoms/TypeBadge'
import StatBar from '../../presentation/components/molecules/StatBar'
import { PokeApiPokemonRepository } from '../../infrastructure/repositories/PokeApiPokemonRepository'
import { dmToMeters, hgToKg, padId } from '../../utils/format'

const repo = new PokeApiPokemonRepository()

export default function PokemonDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['detail', id],
    queryFn: () => repo.getById(id!),
    enabled: !!id
  })

  if (isLoading) return <Spinner />
  if (isError) return <ErrorState message={(error as Error).message} onRetry={() => refetch()} />

  const art =
    data!.sprites.other?.['official-artwork']?.front_default ||
    data!.sprites.front_default ||
    ''

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm bg-white cursor-pointer hover:bg-slate-200"
        >
          ← Back to List
        </button>
      </div>

      <Card>
        {/* Gradient header */}
        <div className="rounded-t-2xl bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold capitalize">{data!.name}</span>
            <span className="text-white/80">{padId(data!.id)}</span>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-4">
            <div className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-white to-slate-100 flex items-center justify-center ring-1 ring-slate-200">
              <img src={art} alt={data!.name} className="w-44 h-44 object-contain" />
            </div>

            <div className="flex items-center justify-center gap-2">
              {data!.types.map(t => (
                <TypeBadge key={t.type.name} name={t.type.name} />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Height</div>
                <div className="font-semibold">{dmToMeters(data!.height)}</div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Weight</div>
                <div className="font-semibold">{hgToKg(data!.weight)}</div>
              </div>
            </div>
          </section>

          {/* Right: stats + abilities + base XP */}
          <section className="space-y-6">
            <div>
              <h2 className="font-semibold text-slate-800 mb-3">Base Stats</h2>
              <div className="space-y-3">
                {data!.stats.map(s => (
                  <StatBar key={s.stat.name} label={s.stat.name} value={s.base_stat} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-slate-800 mb-2">Abilities</h2>
              <ul className="list-disc list-inside text-sm text-slate-700">
                {data!.abilities.map(a => (
                  <li key={a.ability.name} className="capitalize">
                    {a.ability.name} {a.is_hidden ? <span className="text-xs text-slate-500">(hidden)</span> : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-sm">
              <span className="text-slate-600">Base Experience</span>{' '}
              <span className="font-bold text-indigo-700">{data!.base_experience} XP</span>
            </div>
          </section>
        </div>
      </Card>
    </div>
  )
}
