import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

interface CareerNodeProps {
  label: string
  detail: string
  icon: LucideIcon
  featured?: boolean
}

export default function CareerNode({
  label,
  detail,
  icon: Icon,
  featured = false,
}: CareerNodeProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-2xl border p-4 shadow-sm ${
        featured
          ? 'border-violet-200 bg-gradient-to-br from-violet-50 to-white shadow-violet-100'
          : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            featured
              ? 'bg-violet-600 text-white'
              : 'bg-slate-100 text-slate-600'
          }`}
        >
          <Icon size={18} />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">{label}</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            {detail}
          </p>
        </div>
      </div>
    </motion.div>
  )
}