import { BriefcaseBusiness, MapPin, Search, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

interface RecommendedJobsProps {
  loading?: boolean
  jobs?: Array<{
    id: string
    title: string
    company: string
    location: string
    matchScore: number
  }>
  error?: string
}

export default function RecommendedJobs({
  loading = false,
  jobs = [],
  error,
}: RecommendedJobsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-violet-500" />
            <h2 className="font-semibold text-slate-900">Recommended Jobs</h2>
          </div>
          <p className="mt-1 text-sm text-slate-400">
            Opportunities matched to your profile.
          </p>
        </div>

        <button
          type="button"
          className="text-sm font-medium text-violet-600 hover:text-violet-700"
        >
          View all
        </button>
      </div>

      {loading && (
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-20 animate-pulse rounded-xl bg-slate-100"
            />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-red-100 bg-red-50 p-6 text-center">
          <p className="text-sm font-medium text-red-700">
            Unable to load recommendations.
          </p>
          <p className="mt-1 text-xs text-red-500">{error}</p>
        </div>
      )}

      {!loading && !error && jobs.length === 0 && (
        <div className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600">
            <Search size={20} />
          </div>

          <h3 className="mt-4 font-medium text-slate-800">
            No recommendations yet
          </h3>

          <p className="mt-1 max-w-sm text-sm leading-5 text-slate-400">
            Complete your profile and career preferences to receive
            personalized job recommendations.
          </p>
        </div>
      )}

      {!loading && !error && jobs.length > 0 && (
        <div className="space-y-3">
          {jobs.map((job, index) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 transition hover:border-violet-200 hover:shadow-sm"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <BriefcaseBusiness size={19} />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-slate-900">
                    {job.title}
                  </h3>

                  <p className="mt-1 truncate text-xs text-slate-400">
                    {job.company}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                    <MapPin size={13} />
                    {job.location}
                  </div>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-sm font-bold text-violet-600">
                  {job.matchScore}%
                </p>
                <p className="text-[11px] text-slate-400">Match</p>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  )
}