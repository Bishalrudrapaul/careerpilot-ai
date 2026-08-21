import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MarketingLayout from '../layouts/MarketingLayout'
import AppLayout from '../layouts/AppLayout'

const LandingPage = lazy(
  () => import('../features/marketing/landing/LandingPage'),
)

const DashboardPage = lazy(
  () => import('../pages/DashboardPage'),
)

const ProfilePage = lazy(
  () => import('../pages/ProfilePage'),
)

const JobsPage = lazy(
  () => import('../pages/JobsPage'),
)

const ApplicationsPage = lazy(
  () => import('../pages/ApplicationsPage'),
)

const CompaniesPage = lazy(
  () => import('../pages/CompaniesPage'),
)

const CareerAIPage = lazy(
  () => import('../pages/CareerAIPage'),
)

const LearningPage = lazy(
  () => import('../pages/LearningPage'),
)

const NotificationsPage = lazy(
  () => import('../pages/NotificationsPage'),
)

const SettingsPage = lazy(
  () => import('../pages/SettingsPage'),
)

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f8fc]">
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-slate-200 border-t-violet-600" />
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<MarketingLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/career-ai" element={<CareerAIPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}