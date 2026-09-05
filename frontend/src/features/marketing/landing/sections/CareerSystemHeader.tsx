import { motion } from 'motion/react'

export default function CareerSystemHeader() {
  return (
    <div className="flex items-center justify-between border-b border-slate-200/70 pb-4">
      <div>
        <p className="text-sm font-semibold text-slate-950">
          Career intelligence
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Your career system
        </p>
      </div>

      <motion.span
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Ready
      </motion.span>
    </div>
  )
}