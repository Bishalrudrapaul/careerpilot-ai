import { motion } from 'motion/react'

export default function CareerSystemStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-4 flex items-center justify-between rounded-2xl bg-slate-950 px-4 py-3 text-white"
    >
      <div>
        <p className="text-xs font-medium text-slate-400">
          CareerPilot system
        </p>

        <p className="mt-1 text-sm font-semibold">
          Connecting your career journey
        </p>
      </div>

      <div className="flex items-center gap-1">
        {[0, 1, 2, 3].map((item) => (
          <motion.span
            key={item}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: item * 0.2,
            }}
            className="h-1.5 w-1.5 rounded-full bg-violet-400"
          />
        ))}
      </div>
    </motion.div>
  )
}