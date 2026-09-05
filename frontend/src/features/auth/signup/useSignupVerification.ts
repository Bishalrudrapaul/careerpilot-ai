import { useEffect, useState } from 'react'
import {
  requestSignupOtp,
  verifySignupOtp,
} from '../services/auth.service'

export default function useSignupVerification() {
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState('')
  const [seconds, setSeconds] = useState(60)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] =
    useState<'error' | 'success'>('error')

  useEffect(() => {
    if (!otpSent || seconds === 0) return

    const timer = window.setInterval(
      () => setSeconds((value) => value - 1),
      1000,
    )

    return () => window.clearInterval(timer)
  }, [otpSent, seconds])

  const requestOtp = async (
    fullName: string,
    email: string,
    password: string,
  ) => {
    setMessage('')
    setLoading(true)

    const result = await requestSignupOtp({
      fullName,
      email,
      password,
    })

    setLoading(false)

    if (!result.success) {
      setMessageType('error')
      setMessage(result.message ?? 'Unable to send verification code.')
      return false
    }

    setOtpSent(true)
    setSeconds(60)
    setMessageType('success')
    setMessage('Verification code sent to your email.')
    return true
  }

  const verifyOtp = async (email: string) => {
    if (otp.length !== 6) return

    setMessage('')
    setLoading(true)

    const result = await verifySignupOtp(email, otp)

    setLoading(false)

    setMessageType(result.success ? 'success' : 'error')
    setMessage(
      result.message ??
        (result.success
          ? 'Email verified successfully.'
          : 'Invalid or expired verification code.'),
    )
  }

  const resendOtp = async (
    fullName: string,
    email: string,
    password: string,
  ) => {
    if (seconds !== 0) return

    setMessage('')
    setLoading(true)

    const result = await requestSignupOtp({
      fullName,
      email,
      password,
    })

    setLoading(false)

    if (!result.success) {
      setMessageType('error')
      setMessage(result.message ?? 'Unable to resend verification code.')
      return
    }

    setSeconds(60)
    setOtp('')
    setMessageType('success')
    setMessage('A new verification code has been sent.')
  }

  return {
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
  }
}