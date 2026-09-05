import type { ReactNode } from 'react'

type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'danger'
  | 'ai'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  default:
    'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
  success:
    'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  warning:
    'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
  danger:
    'bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300',
  ai:
    'bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300',
}

export default function Badge({
  children,
  variant = 'default',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1
        text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}