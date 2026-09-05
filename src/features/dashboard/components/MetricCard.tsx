import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

interface MetricCardProps {
  title: string
  value?: string | number
  description?: string
  icon: LucideIcon
  accent: string
  loading?: boolean
  href?: string
}

export default function MetricCard({
  title,
  value,
  description,
  icon: Icon,
  accent,
  loading = false,
  href,
}: MetricCardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
      />

      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-slate-700">
          <Icon size={21} />
        </div>

        {href && (
          <ArrowUpRight
            size={18}
            className="text-slate-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        )}
      </div>

      <p className="mt-5 text-sm font-medium text-slate-500">{title}</p>

      {loading ? (
        <div className="mt-2 h-9 w-24 animate-pulse rounded-lg bg-slate-100" />
      ) : (
        <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
          {value ?? '—'}
        </p>
      )}

      {description && (
        <p className="mt-2 text-xs leading-5 text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  )

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  )
}