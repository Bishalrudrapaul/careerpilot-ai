import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

interface CareerMiniCardProps {
  icon: LucideIcon
  label: string
  text: string
  accent: 'violet' | 'cyan' | 'amber'
}

const accents = {
  violet: 'bg-violet-50 text-violet-600',
  cyan: 'bg-cyan-50 text-cyan-600',
  amber: 'bg-amber-50 text-amber-600',
}

export default function CareerMiniCard({
  icon: Icon,
  label,
  text,
  accent,
}: CareerMiniCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-slate-200 bg-white p-4"
    >
      <div
        className={`mb-3 flex h-9 w-9 items-center justify-center rounded-lg ${accents[accent]}`}
      >
        <Icon size={17} />
      </div>

      <p className="text-sm font-semibold text-slate-900">{label}</p>
      <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
    </motion.div>
  )
}