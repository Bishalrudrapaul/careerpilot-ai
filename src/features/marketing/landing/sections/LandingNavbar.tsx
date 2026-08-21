import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import type { LandingSection } from '../types'

interface LandingNavbarProps {
  onNavigate: (section: LandingSection) => void
}

export default function LandingNavbar({
  onNavigate,
}: LandingNavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute left-0 right-0 top-0 z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8"
    >
      <Link to="/" className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white shadow-md">
          <Sparkles size={17} />
        </span>

        <span className="text-lg font-bold tracking-tight text-slate-950">
          CareerPilot <span className="text-violet-600">AI</span>
        </span>
      </Link>

      <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        <button
          type="button"
          onClick={() => onNavigate('how-it-works')}
          className="transition hover:text-slate-950"
        >
          How it works
        </button>

        <button
          type="button"
          onClick={() => onNavigate('capabilities')}
          className="transition hover:text-slate-950"
        >
          Capabilities
        </button>

        <button
          type="button"
          onClick={() => onNavigate('career-journey')}
          className="transition hover:text-slate-950"
        >
          Career journey
        </button>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="hidden px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:block"
        >
          Sign in
        </Link>

        <Link
          to="/signup"
          className="group flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-300/30 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Get started
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.nav>
  )
}