import { ArrowLeft, Sparkles } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import { motion } from 'motion/react'

export default function AuthLayout() {
  return (
    <main className="min-h-screen bg-[#f7f8fc]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:px-8">
        <header className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
              <Sparkles size={17} />
            </span>

            <span className="text-lg font-bold tracking-tight text-slate-950">
              CareerPilot <span className="text-violet-600">AI</span>
            </span>
          </Link>

          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-300/30 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Back
          </Link>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-1 items-center justify-center py-12"
        >
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </motion.div>
      </div>
    </main>
  )
}