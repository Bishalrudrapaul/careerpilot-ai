import { motion } from 'motion/react'
import {
  FileSearch,
  GraduationCap,
  Mic2,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const actions = [
  {
    label: 'Resume Review',
    description: 'Analyze and improve your resume',
    icon: FileSearch,
    path: '/career-ai',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    label: 'Skill Gap',
    description: 'Discover skills for your target role',
    icon: GraduationCap,
    path: '/learning',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    label: 'Interview Prep',
    description: 'Practice role-specific interviews',
    icon: Mic2,
    path: '/career-ai',
    gradient: 'from-orange-500 to-pink-600',
  },
  {
    label: 'Career AI',
    description: 'Get personalized career guidance',
    icon: Sparkles,
    path: '/career-ai',
    gradient: 'from-fuchsia-500 to-violet-600',
  },
]

export default function QuickActions() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Career Tools
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Tools to help you move forward in your career.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action, index) => {
          const Icon = action.icon

          return (
            <Link key={action.label} to={action.path}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${action.gradient} text-white shadow-md`}
                >
                  <Icon size={20} />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-slate-900">
                  {action.label}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  {action.description}
                </p>

                <span className="mt-4 inline-block text-xs font-semibold text-violet-600 transition group-hover:translate-x-1">
                  Explore →
                </span>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}