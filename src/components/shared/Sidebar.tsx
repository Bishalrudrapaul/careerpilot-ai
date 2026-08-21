import { motion } from 'motion/react'
import {
  Bell,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Crown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Sparkles,
  UserRound,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'My Profile', path: '/profile', icon: UserRound },
  { label: 'Find Jobs', path: '/jobs', icon: BriefcaseBusiness },
  { label: 'Applications', path: '/applications', icon: FileText },
  { label: 'Companies', path: '/companies', icon: Building2 },
  { label: 'Career AI', path: '/career-ai', icon: Sparkles },
  { label: 'Learning', path: '/learning', icon: GraduationCap },
  { label: 'Notifications', path: '/notifications', icon: Bell },
  { label: 'Settings', path: '/settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-72 shrink-0 flex-col bg-gradient-to-b from-[#111637] via-[#17164a] to-[#0b1029] px-4 py-5 text-white">
      <div className="mb-8 px-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
            <Sparkles size={21} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight">
              CareerPilot AI
            </h1>
            <p className="text-xs text-slate-400">
              Your AI career companion
            </p>
          </div>
        </div>
      </div>

      <nav className="space-y-1.5">
        {navigation.map(({ label, path, icon: Icon }) => (
          <NavLink key={path} to={path}>
            {({ isActive }) => (
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ duration: 0.18 }}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-900/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={19} />
                <span>{label}</span>

                {label === 'Notifications' && (
                  <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-fuchsia-500 px-1 text-[10px] font-bold">
                    3
                  </span>
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="mb-5 rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 to-fuchsia-500/10 p-4">
          <div className="flex items-center gap-2 text-amber-300">
            <Crown size={17} />
            <span className="text-sm font-semibold">Unlock Premium</span>
          </div>

          <p className="mt-2 text-xs leading-5 text-slate-400">
            Get deeper AI insights, resume reviews and career guidance.
          </p>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-2.5 text-sm font-semibold shadow-lg shadow-violet-900/30">
            Upgrade Now
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex items-center gap-3 border-t border-white/10 px-2 pt-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-sm font-bold text-slate-900">
  ?
</div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">Your Profile</p>
            <p className="text-xs text-slate-400">View Profile</p>
          </div>
        </div>
      </div>
    </aside>
  )
}