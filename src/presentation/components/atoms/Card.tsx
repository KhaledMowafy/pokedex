
import type { ReactNode } from 'react'

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">{children}</div>
  )
}
