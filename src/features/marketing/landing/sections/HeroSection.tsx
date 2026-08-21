import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import CareerSystemVisual from './CareerSystemVisual'
import HeroBackground from './HeroBackground'
import LandingNavbar from './LandingNavbar'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f8fc]">
      <HeroBackground />
      <LandingNavbar />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-12 lg:grid-cols-[.92fr_1.08fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-3.5 py-2 text-xs font-semibold text-violet-700 shadow-sm">
            <Sparkles size={14} />
            Career intelligence platform
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            Build your career with
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              intelligence.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            CareerPilot AI connects your profile, skills, goals, opportunities,
            and next steps into one intelligent career system.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/signup"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-300/30 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Start building my profile
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore how it works
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <Feature label="Profile-driven" />
            <Feature label="Personalized" />
            <Feature label="Built for growth" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <CareerSystemVisual />
        </motion.div>
      </div>
    </section>
  )
}

function Feature({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle2 size={16} className="text-emerald-500" />
      {label}
    </span>
  )
}