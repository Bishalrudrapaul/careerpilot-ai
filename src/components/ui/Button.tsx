import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900',
  secondary:
    'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200',
  ghost:
    'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={`rounded-xl px-4 py-2.5 text-sm font-medium
        transition-colors disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}