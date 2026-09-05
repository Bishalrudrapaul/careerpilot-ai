import { motion } from 'motion/react'

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-[4%] top-[12%] h-72 w-72 rounded-full bg-violet-200/40 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute right-[3%] top-[10%] h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl"
      />

      <div className="absolute left-1/2 top-[18%] h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
    </div>
  )
}