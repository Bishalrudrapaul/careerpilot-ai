import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Route,
  Sparkles,
} from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import LandingNavbar from './LandingNavbar'

const journey = [
  'Understand yourself',
  'Choose a direction',
  'Discover opportunities',
  'Build the right skills',
  'Make your next move',
]

export default function CareerJourneySection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f8fc] px-6 py-20 text-slate-950 lg:px-8">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <LandingNavbar />

      <div className="relative mx-auto w-full max-w-7xl pt-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
              <Compass size={15} />
              Career journey
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Know what comes next.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Your career does not end at finding a job. CareerPilot is
              designed around the full journey from self-understanding to
              continuous growth.
            </p>
          </motion.div>

          <div className="space-y-3">
            {journey.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-violet-200 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-sm font-bold text-violet-600">
                  0{index + 1}
                </div>

                <p className="font-medium text-slate-800">{step}</p>

                {index < journey.length - 1 && (
                  <ArrowRight
                    className="ml-auto text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-500"
                    size={18}
                  />
                )}
              </motion.div>
            ))}

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
                <Route size={16} />
                A connected career system
                <Sparkles size={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}