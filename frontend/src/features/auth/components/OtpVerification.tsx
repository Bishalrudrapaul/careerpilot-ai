import { ArrowLeft, RefreshCw } from 'lucide-react'
import { useEffect, useState } from 'react'

interface OtpVerificationProps {
  email: string
  onBack: () => void
  onVerified: () => void
}

export default function OtpVerification({
  email,
  onBack,
  onVerified,
}: OtpVerificationProps) {
  const [otp, setOtp] = useState('')
  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    if (seconds === 0) return

    const timer = window.setInterval(() => {
      setSeconds((value) => value - 1)
    }, 1000)

    return () => window.clearInterval(timer)
  }, [seconds])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (otp.length === 6) {
      onVerified()
    }
  }

  const handleResend = () => {
    if (seconds === 0) {
      setSeconds(60)
      setOtp('')
    }
  }

  return (
    <section>
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
      >
        <ArrowLeft size={16} />
        Change email
      </button>

      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
        Verify your email
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
        Enter your verification code.
      </h1>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        We sent a 6-digit code to{' '}
        <span className="font-semibold text-slate-700">{email}</span>.
      </p>

      <form onSubmit={handleSubmit} className="mt-8">
        <label
          htmlFor="otp"
          className="mb-2 block text-sm font-semibold text-slate-700"
        >
          Verification code
        </label>

        <input
          id="otp"
          name="otp"
          value={otp}
          onChange={(event) =>
            setOtp(event.target.value.replace(/\D/g, '').slice(0, 6))
          }
          inputMode="numeric"
          autoComplete="one-time-code"
          placeholder="000000"
          maxLength={6}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-center text-2xl font-bold tracking-[0.45em] text-slate-950 outline-none transition placeholder:text-slate-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
        />

        <button
          type="submit"
          disabled={otp.length !== 6}
          className="mt-5 w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Verify email
        </button>
      </form>

      <div className="mt-5 text-center">
        {seconds > 0 ? (
          <p className="text-sm text-slate-400">
            Resend code in{' '}
            <span className="font-semibold text-slate-600">
              {seconds}s
            </span>
          </p>
        ) : (
          <button
            type="button"
            onClick={handleResend}
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-700"
          >
            <RefreshCw size={15} />
            Resend code
          </button>
        )}
      </div>
    </section>
  )
}