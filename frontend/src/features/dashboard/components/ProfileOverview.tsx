import { ArrowRight, CheckCircle2, CircleUserRound } from 'lucide-react'
import { motion } from 'motion/react'

interface ProfileOverviewProps {
  loading?: boolean
  completion?: number
  completedSections?: number
  totalSections?: number
  error?: string
}

export default function ProfileOverview({
  loading = false,
  completion,
  completedSections,
  totalSections,
  error,
}: ProfileOverviewProps) {
  const hasData =
    completion !== undefined &&
    completedSections !== undefined &&
    totalSections !== undefined

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CircleUserRound size={18} className="text-fuchsia-500" />
            <h2 className="font-semibold text-slate-900">
              Profile Overview
            </h2>
          </div>

          <p className="mt-1 text-sm text-slate-400">
            Complete your profile to improve career recommendations.
          </p>
        </div>

        <ArrowRight size={18} className="text-slate-300" />
      </div>

      {loading && (
        <div className="mt-6 space-y-4">
          <div className="h-3 w-full animate-pulse rounded-full bg-slate-100" />
          <div className="h-4 w-32 animate-pulse rounded bg-slate-100" />
          <div className="h-10 w-full animate-pulse rounded-xl bg-slate-100" />
        </div>
      )}

      {!loading && error && (
        <div className="mt-6 rounded-xl bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">
            Profile data unavailable.
          </p>
          <p className="mt-1 text-xs text-red-500">{error}</p>
        </div>
      )}

      {!loading && !error && !hasData && (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-fuchsia-50 text-fuchsia-500">
            <CircleUserRound size={20} />
          </div>

          <p className="mt-3 text-sm font-medium text-slate-800">
            Your profile has not been loaded yet.
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Connect your profile service to display your career progress.
          </p>
        </div>
      )}

      {!loading && !error && hasData && (
        <div className="mt-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-3xl font-bold text-slate-900">
                {completion}%
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Profile completion
              </p>
            </div>

            <p className="text-xs font-medium text-slate-500">
              {completedSections}/{totalSections} sections
            </p>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completion}%` }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
            />
          </div>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
          >
            Complete profile
            <CheckCircle2 size={17} />
          </button>
        </div>
      )}
    </section>
  )
}