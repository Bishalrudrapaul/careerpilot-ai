import { useEffect, useRef } from 'react'
import { Bell, ChevronDown, Search, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

export default function Topbar() {
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        searchRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleShortcut)

    return () => {
      window.removeEventListener('keydown', handleShortcut)
    }
  }, [])

  return (
    <header className="flex h-[76px] items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex w-full max-w-2xl items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 transition-all focus-within:border-violet-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100">
        <Search size={19} className="mr-3 shrink-0 text-slate-400" />

        <input
          ref={searchRef}
          type="search"
          placeholder="Search jobs, companies, skills..."
          className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          aria-label="Search jobs, companies and skills"
        />
      </div>

      <div className="ml-6 flex items-center gap-3">
        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-300/30 md:flex"
        >
          <Sparkles size={17} />
          AI Assistant
        </motion.button>

        <button
          type="button"
          className="relative rounded-xl p-2.5 text-slate-600 transition-colors hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-fuchsia-500" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl px-2 py-1.5 transition-colors hover:bg-slate-50"
          aria-label="Open profile menu"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 text-xs font-bold text-slate-900">
            BP
          </div>

          <ChevronDown size={16} className="text-slate-400" />
        </button>
      </div>
    </header>
  )
}