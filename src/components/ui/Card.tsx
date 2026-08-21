import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export default function Card({
  children,
  className = '',
  interactive = false,
}: CardProps) {
  return (
    <motion.div
      className={`rounded-2xl border border-slate-200/70 bg-white p-5
        shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}
      whileHover={
        interactive
          ? { y: -3, transition: { duration: 0.2 } }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}