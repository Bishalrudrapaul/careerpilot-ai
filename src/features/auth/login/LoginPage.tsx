import { Mail } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthDivider from '../components/AuthDivider'
import AuthMessage from '../components/AuthMessage'
import PasswordField from '../components/PasswordField'
import SocialLoginButtons from '../components/SocialLoginButtons'
import { login } from '../services/auth.service'
import { useAuth } from '../useAuth'

export default function LoginPage() {
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    setMessage('')
    setLoading(true)

    const result = await login(email, password)

    setLoading(false)

    if (!result.success) {
      setMessage(result.message ?? 'Unable to sign in.')
      return
    }

    signIn()
    navigate('/dashboard')
  }

  return (
    <section>
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
          Welcome back
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Sign in to CareerPilot.
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Continue your career journey from where you left off.
        </p>
      </header>

      <div className="mt-8">
        <SocialLoginButtons />
      </div>

      <AuthDivider />

      {message && (
        <div className="mb-5">
          <AuthMessage message={message} />
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Email address
          </label>

          <div className="relative">
            <Mail
              size={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
            />
          </div>
        </div>

        <PasswordField
          value={password}
          showPassword={showPassword}
          onChange={setPassword}
          onToggle={() => setShowPassword((value) => !value)}
          showForgotPassword
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-300/30 transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        New to CareerPilot?{' '}
        <Link
          to="/signup"
          className="font-semibold text-violet-600 transition hover:text-violet-700"
        >
          Create an account
        </Link>
      </p>
    </section>
  )
}