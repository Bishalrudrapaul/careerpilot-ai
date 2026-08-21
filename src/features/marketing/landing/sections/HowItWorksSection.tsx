import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  UserRound,
} from 'lucide-react'
import { motion } from 'motion/react'
import LandingNavbar from './LandingNavbar'

const steps = [
  {
    number: '01',
    title: 'Build your profile',
    text: 'Bring together your education, skills, projects, experience and career goals.',
    icon: UserRound,
  },
  {
    number: '02',
    title: 'Understand your direction',
    text: 'CareerPilot analyzes your profile to understand your strengths, interests and gaps.',
    icon: BrainCircuit,
  },
  {
    number: '03',
    title: 'Discover opportunities',
    text: 'Find roles and career paths aligned with your profile and preferences.',
    icon: BriefcaseBusiness,
  },
  {
    number: '04',
    title: 'Keep improving',
    text: 'Follow personalized recommendations to strengthen the skills that matter.',
    icon: GraduationCap,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-20 lg:px-8">
      <LandingNavbar />

      <div className="mx-auto w-full max-w-7xl pt-16">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
            How it works
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            One career profile.
            <span className="block text-slate-400">
              An entire career system.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            CareerPilot connects the information about you with the decisions
            you need to make next.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-slate-300">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                    <Icon size={19} />
                  </div>
                </div>

                <h2 className="mt-8 text-lg font-semibold text-slate-950">
                  {step.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.text}
                </p>

                <div className="mt-6 h-px w-full bg-slate-200">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '35%' }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.08,
                    }}
                    className="h-px bg-violet-500"
                  />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}