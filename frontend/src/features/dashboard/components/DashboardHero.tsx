import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'

export default function DashboardHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#151a46] via-[#33226f] to-[#8f2de2] p-7 text-white shadow-xl shadow-violet-200/30"
    >
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="relative flex items-start justify-between gap-6">
        <div>
          <div className="mb-3 flex items-center gap-2 text-violet-200">
            <Sparkles size={18} />
            <span className="text-sm font-medium">
              Career command center
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            Build your next career move.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-violet-100">
            Connect your profile to discover opportunities, identify skill
            gaps, and get personalized career guidance.
          </p>
        </div>
      </div>
    </motion.section>
  )
}