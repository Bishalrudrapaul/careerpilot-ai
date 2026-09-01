import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout'
import AppLayout from '../layouts/AppLayout'
import MarketingLayout from '../layouts/MarketingLayout'
import ProtectedRoute from '../components/shared/ProtectedRoute'


const LandingPage = lazy(
  () => import('../features/marketing/landing/LandingPage'),
)

const HowItWorksSection = lazy(
  () => import('../features/marketing/landing/sections/HowItWorksSection'),
)

const CapabilitiesSection = lazy(
  () => import('../features/marketing/landing/sections/CapabilitiesSection'),
)

const CareerJourneySection = lazy(
  () => import('../features/marketing/landing/sections/CareerJourneySection'),
)

const LoginPage = lazy(
  () => import('../features/auth/login/LoginPage'),
)

const SignupPage = lazy(
  () => import('../features/auth/signup/SignupPage'),
)

const DashboardPage = lazy(() => import('../pages/DashboardPage'))
const ProfilePage = lazy(() => import('../pages/ProfilePage'))
const JobsPage = lazy(() => import('../pages/JobsPage'))
const ApplicationsPage = lazy(() => import('../pages/ApplicationsPage'))
const CompaniesPage = lazy(() => import('../pages/CompaniesPage'))
const CareerAIPage = lazy(() => import('../pages/CareerAIPage'))
const LearningPage = lazy(() => import('../pages/LearningPage'))
const NotificationsPage = lazy(() => import('../pages/NotificationsPage'))
const SettingsPage = lazy(() => import('../pages/SettingsPage'))

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
          <Route path="/how-it-works" element={<HowItWorksSection />} />
          <Route path="/capabilities" element={<CapabilitiesSection />} />
          <Route path="/career-journey" element={<CareerJourneySection />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
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
</Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}