
import Button from '../atoms/Button'

type Props = {
  page: number
  total: number
  pageSize: number
  onChange: (page: number) => void
}

export default function Pagination({ page, total, pageSize, onChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const canPrev = page > 1
  const canNext = page < totalPages

  const pages: number[] = []
  const start = Math.max(1, page - 2)
  const end = Math.min(totalPages, page + 2)
  for (let p = start; p <= end; p++) pages.push(p)

  return (
    <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
      <Button onClick={() => onChange(page - 1)} disabled={!canPrev} variant="ghost">Prev</Button>
      {pages.map(p => (
        <Button key={p} onClick={() => onChange(p)} variant={p === page ? 'primary' : 'ghost'}>{p}</Button>
      ))}
      <Button onClick={() => onChange(page + 1)} disabled={!canNext} variant="ghost">Next</Button>
    </div>
  )
}
