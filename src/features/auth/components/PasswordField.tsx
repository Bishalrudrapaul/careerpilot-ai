import { Eye, EyeOff, LockKeyhole } from 'lucide-react'

interface PasswordFieldProps {
  value: string
  showPassword: boolean
  onChange: (value: string) => void
  onToggle: () => void
  showForgotPassword?: boolean
}

export default function PasswordField({
  value,
  showPassword,
  onChange,
  onToggle,
  showForgotPassword = true,
}: PasswordFieldProps) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label
          htmlFor="password"
          className="text-sm font-semibold text-slate-700"
        >
          Password
        </label>

        {showForgotPassword && (
          <button
            type="button"
            className="text-xs font-semibold text-violet-600 transition hover:text-violet-700"
          >
            Forgot password?
          </button>
        )}
      </div>

      <div className="relative">
        <LockKeyhole
          size={17}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          autoComplete="new-password"
          placeholder="Create a password"
          required
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-11 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />

        <button
          type="button"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
        </button>
      </div>
    </div>
  )
}