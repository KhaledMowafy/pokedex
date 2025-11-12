
import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ className = '', variant = 'primary', ...props }: Props) {
  const base = 'px-4 py-2 rounded-xl text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed'
  const styles = variant === 'primary'
    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow'
    : 'bg-transparent hover:bg-slate-100 text-slate-900'
  return <button className={`${base} ${styles} ${className}`} {...props} />
}
