import { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthDivider from '../components/AuthDivider'
import AuthMessage from '../components/AuthMessage'
import SignupForm from '../components/SignupForm'
import SocialLoginButtons from '../components/SocialLoginButtons'
import useSignupVerification from './useSignupVerification'

export default function SignupPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const {
    otpSent,
    otp,
    setOtp,
    seconds,
    loading,
    message,
    messageType,
    requestOtp,
    verifyOtp,
    resendOtp,
  } = useSignupVerification()

  const handleContinue = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    await requestOtp(fullName, email, password)
  }

  const handleVerify = () => {
    void verifyOtp(email)
  }

  const handleResend = () => {
    void resendOtp(fullName, email, password)
  }

  return (
    <section>
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
          Get started
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          Create your CareerPilot account.
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Build your profile and start your personalized career journey.
        </p>
      </header>

      <div className="mt-8">
        <SocialLoginButtons />
      </div>

      <AuthDivider />

      {message && (
        <div className="mb-5">
          <AuthMessage message={message} variant={messageType} />
        </div>
      )}

      <SignupForm
        fullName={fullName}
        email={email}
        password={password}
        otp={otp}
        showPassword={showPassword}
        otpSent={otpSent}
        seconds={seconds}
        loading={loading}
        onFullNameChange={setFullName}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onOtpChange={setOtp}
        onTogglePassword={() => setShowPassword((value) => !value)}
        onContinue={handleContinue}
        onResend={handleResend}
        onVerify={handleVerify}
      />

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-semibold text-violet-600 transition hover:text-violet-700"
        >
          Sign in
        </Link>
      </p>
    </section>
  )
}