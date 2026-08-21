import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BrainCircuit,
  FileSearch,
  GraduationCap,
  Sparkles,
  Target,
} from 'lucide-react'
import { motion } from 'motion/react'
import LandingNavbar from './LandingNavbar'

const capabilities = [
  {
    title: 'Resume Intelligence',
    text: 'Understand how your experience supports the career direction you are pursuing.',
    icon: FileSearch,
  },
  {
    title: 'Career Intelligence',
    text: 'Connect your skills, interests and goals into a clearer career direction.',
    icon: BrainCircuit,
  },
  {
    title: 'Skill Gap Analysis',
    text: 'Identify the capabilities that can strengthen the career path you choose.',
    icon: GraduationCap,
  },
  {
    title: 'Opportunity Matching',
    text: 'Discover opportunities based on your complete career profile.',
    icon: Target,
  },
]

export default function CapabilitiesSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f8fc] px-6 py-20 lg:px-8">
      <LandingNavbar />

      <div className="mx-auto w-full max-w-7xl pt-16">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
            <Sparkles size={15} />
            Built around you
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Intelligence for every part of your career.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            CareerPilot brings the important pieces of your career journey
            together instead of treating them as separate tools.
          </p>
        </motion.header>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <Icon size={20} />
                </div>

                <h2 className="mt-6 text-lg font-semibold text-slate-950">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}