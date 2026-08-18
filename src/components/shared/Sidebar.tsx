import { NavLink } from 'react-router-dom'
import {
  Bell,
  Briefcase,
  Building2,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Sparkles,
  UserRound,
} from 'lucide-react'

const navigation = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'My Profile', path: '/profile', icon: UserRound },
  { label: 'Find Jobs', path: '/jobs', icon: Briefcase },
  { label: 'Applications', path: '/applications', icon: GraduationCap },
  { label: 'Companies', path: '/companies', icon: Building2 },
  { label: 'Career AI', path: '/career-ai', icon: Sparkles },
  { label: 'Learning', path: '/learning', icon: GraduationCap },
  { label: 'Notifications', path: '/notifications', icon: Bell },
  { label: 'Settings', path: '/settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b px-6 py-5">
        <h1 className="text-xl font-bold">CareerPilot AI</h1>
        <p className="text-xs text-gray-500">Your AI career companion</p>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navigation.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}