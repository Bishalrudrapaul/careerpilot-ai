import { Outlet } from 'react-router-dom'
import Sidebar from '../components/shared/Sidebar'
import Topbar from '../components/shared/Topbar'

export default function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#f7f8fc]">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="min-h-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}