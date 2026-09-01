import { RefreshCw } from 'lucide-react'

interface OtpVerificationFieldProps {
  otp: string
  seconds: number
  loading: boolean
  onChange: (value: string) => void
  onResend: () => void
  onVerify: () => void
}

export default function OtpVerificationField({
  otp,
  seconds,
  loading,
  onChange,
  onResend,
  onVerify,
}: OtpVerificationFieldProps) {
  return (
    <div className="rounded-2xl border border-violet-100 bg-violet-50/50 p-4">
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
          onChange(event.target.value.replace(/\D/g, '').slice(0, 6))
        }
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={6}
        placeholder="000000"
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-center text-2xl font-bold tracking-[0.4em] text-slate-950 outline-none transition placeholder:text-slate-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
      />

      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={onResend}
          disabled={seconds !== 0 || loading}
          className="text-xs font-semibold text-violet-600 transition hover:text-violet-700 disabled:text-slate-400"
        >
          {seconds === 0 ? (
            <span className="inline-flex items-center gap-1.5">
              <RefreshCw size={14} />
              Resend code
            </span>
          ) : (
            `Resend code in ${seconds}s`
          )}
        </button>

        <button
          type="button"
          onClick={onVerify}
          disabled={otp.length !== 6 || loading}
          className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? 'Verifying...' : 'Verify'}
        </button>
      </div>
    </div>
  )
}