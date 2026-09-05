import {
  BriefcaseBusiness,
  CircleUserRound,
  Gauge,
} from 'lucide-react'
import DashboardHero from './components/DashboardHero'
import MetricCard from './components/MetricCard'
import RecommendedJobs from './components/RecommendedJobs'
import ProfileOverview from './components/ProfileOverview'
import CareerInsight from './components/CareerInsight'
import QuickActions from './components/QuickActions'

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-[1600px] space-y-6 p-6">
      <DashboardHero />

      <section className="grid gap-4 md:grid-cols-3">
        <MetricCard
          title="Profile Strength"
          icon={CircleUserRound}
          accent="from-violet-500 to-fuchsia-500"
          description="Your profile data will appear here."
        />

        <MetricCard
          title="Matched Opportunities"
          icon={BriefcaseBusiness}
          accent="from-cyan-500 to-blue-600"
          description="Personalized matches will appear here."
        />

        <MetricCard
          title="Career Match Score"
          icon={Gauge}
          accent="from-orange-500 to-pink-600"
          description="Your AI compatibility score will appear here."
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <RecommendedJobs />
        <ProfileOverview />
      </section>

      <CareerInsight />

      <QuickActions />
    </div>
  )
}