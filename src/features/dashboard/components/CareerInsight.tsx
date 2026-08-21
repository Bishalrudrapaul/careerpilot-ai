import { BrainCircuit, RefreshCw, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

interface CareerInsightProps {
  loading?: boolean
  title?: string
  insight?: string
  actionLabel?: string
  onAction?: () => void
  error?: string
}

export default function CareerInsight({
  loading = false,
  title,
  insight,
  actionLabel,
  onAction,
  error,
}: CareerInsightProps) {
  const hasInsight = Boolean(title && insight)

  return (
    <section className="relative overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 p-6 shadow-sm">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-fuchsia-300/20 blur-3xl" />

      <div className="relative">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-200">
            <BrainCircuit size={21} />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-violet-600" />
              <h2 className="font-semibold text-slate-900">
                AI Career Insight
              </h2>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Personalized guidance generated from your career profile.
            </p>
          </div>
        </div>

        {loading && (
          <div className="mt-6 space-y-3">
            <div className="h-5 w-2/3 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-slate-100" />
          </div>
        )}

        {!loading && error && (
          <div className="mt-6 rounded-xl border border-red-100 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-700">
              AI insight is currently unavailable.
            </p>

            <p className="mt-1 text-xs text-red-500">{error}</p>

            <button
              type="button"
              onClick={onAction}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-red-700"
            >
              <RefreshCw size={15} />
              Try again
            </button>
          </div>
        )}

        {!loading && !error && !hasInsight && (
          <div className="mt-6 rounded-xl border border-dashed border-violet-200 bg-white/70 p-5">
            <p className="text-sm font-medium text-slate-800">
              Your AI career analysis will appear here.
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Connect the Career AI service to receive personalized guidance.
            </p>
          </div>
        )}

        {!loading && !error && hasInsight && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-xl bg-white/80 p-5 ring-1 ring-violet-100"
          >
            <h3 className="font-semibold text-slate-900">{title}</h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {insight}
            </p>

            {actionLabel && (
              <button
                type="button"
                onClick={onAction}
                className="mt-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-200 transition hover:shadow-lg"
              >
                {actionLabel}
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
