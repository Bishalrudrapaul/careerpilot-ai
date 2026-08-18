import { Bell, Search } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div className="flex w-full max-w-md items-center gap-2 rounded-lg bg-gray-100 px-3 py-2">
        <Search size={18} className="text-gray-400" />

        <input
          type="search"
          placeholder="Search jobs, companies..."
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      <button
        type="button"
        className="ml-4 rounded-full p-2 hover:bg-gray-100"
        aria-label="Notifications"
      >
        <Bell size={20} />
      </button>
    </header>
  )
}