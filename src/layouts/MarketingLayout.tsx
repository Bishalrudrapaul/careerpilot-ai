import { Outlet } from 'react-router-dom'

export default function MarketingLayout() {
  return (
    <div className="min-h-screen bg-[#090d24]">
      <Outlet />
    </div>
  )
}