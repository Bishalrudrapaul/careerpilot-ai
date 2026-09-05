import PasswordField from './PasswordField'
import SignupFields from './SignupFields'
import OtpVerificationField from './OtpVerificationField'

interface SignupFormProps {
  fullName: string
  email: string
  password: string
  otp: string
  showPassword: boolean
  otpSent: boolean
  seconds: number
  loading: boolean
  onFullNameChange: (value: string) => void
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onOtpChange: (value: string) => void
  onTogglePassword: () => void
  onContinue: (event: React.FormEvent<HTMLFormElement>) => void
  onResend: () => void
  onVerify: () => void
}

export default function SignupForm({
  fullName,
  email,
  password,
  otp,
  showPassword,
  otpSent,
  seconds,
  loading,
  onFullNameChange,
  onEmailChange,
  onPasswordChange,
  onOtpChange,
  onTogglePassword,
  onContinue,
  onResend,
  onVerify,
}: SignupFormProps) {
  return (
    <form className="space-y-5" onSubmit={onContinue}>
      <SignupFields
        fullName={fullName}
        email={email}
        onFullNameChange={onFullNameChange}
        onEmailChange={onEmailChange}
      />

      {!otpSent && (
        <>
          <PasswordField
            value={password}
            showPassword={showPassword}
            onChange={onPasswordChange}
            onToggle={onTogglePassword}
            showForgotPassword={false}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-300/30 transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Sending code...' : 'Continue'}
          </button>
        </>
      )}

      {otpSent && (
        <OtpVerificationField
          otp={otp}
          seconds={seconds}
          loading={loading}
          onChange={onOtpChange}
          onResend={onResend}
          onVerify={onVerify}
        />
      )}
    </form>
  )
}