import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
        Welcome back
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
        Sign in to CareerPilot.
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        Continue your career journey from where you left off.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">
          Login form will be added next.
        </p>
      </div>

      <p className="mt-5 text-center text-sm text-slate-500">
        New to CareerPilot?{' '}
        <Link
          to="/signup"
          className="font-semibold text-violet-600 hover:text-violet-700"
        >
          Create an account
        </Link>
      </p>
    </section>
  )
}