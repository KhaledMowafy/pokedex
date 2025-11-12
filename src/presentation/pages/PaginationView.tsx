
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { SkeletonCard } from '../components/atoms/Skeleton'
import ErrorState from '../components/atoms/ErrorState'
import PokemonGrid from '../components/organisms/PokemonGrid'
import { PokeApiPokemonRepository } from '../../infrastructure/repositories/PokeApiPokemonRepository'

const repo = new PokeApiPokemonRepository()
const PAGE_SIZE = 12

export default function PaginationView() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, error, refetch, isRefetching } = useQuery({
    queryKey: ['list', page],
    queryFn: () => repo.list({ limit: PAGE_SIZE, offset: (page - 1) * PAGE_SIZE })
  })

 if (isLoading)
     return (
       <div className="space-y-4 flex justify-between">
         <SkeletonCard />
         <SkeletonCard />
         <SkeletonCard />
         <SkeletonCard />
       </div>
     );
  if (isError) return <ErrorState message={(error as Error).message} onRetry={() => refetch()} />

  return (
    <div>
      <PokemonGrid items={data!.results} />
      <div className="text-sm text-slate-600 mt-3">{isRefetching ? 'Refreshing…' : ''}</div>
      <div className="mt-4">
        <PaginationControls page={page} total={data!.count} onChange={setPage} pageSize={PAGE_SIZE} />
      </div>
    </div>
  )
}

function PaginationControls({ page, total, pageSize, onChange }:{ page:number; total:number; pageSize:number; onChange:(p:number)=>void }){
  const totalPages = Math.ceil(total / pageSize)
  const canPrev = page > 1
  const canNext = page < totalPages
  const pages: number[] = []
  const start = Math.max(1, page - 2)
  const end = Math.min(totalPages, page + 2)
  for (let p = start; p <= end; p++) pages.push(p)

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      <button onClick={() => onChange(page-1)} disabled={!canPrev} className={`${!canPrev?'cursor-not-allowed':'cursor-pointer'} px-3 py-2 rounded-xl bg-slate-100 disabled:opacity-50`}>Prev</button>
      {pages.map(p => (
        <button key={p} onClick={() => onChange(p)} className={`cursor-pointer px-3 py-2 rounded-xl ${p===page?'bg-indigo-600 text-white':'bg-slate-100'}`}>{p}</button>
      ))}
      <button onClick={() => onChange(page+1)} disabled={!canNext} className={`${!canNext?'cursor-not-allowed':'cursor-pointer'} px-3 py-2 rounded-xl bg-slate-100 disabled:opacity-50`}>Next</button>
    </div>
  )
}
