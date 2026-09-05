export interface SignupRequest {
  fullName: string
  email: string
  password: string
}

export interface AuthResult {
  success: boolean
  message?: string
}

const API_BASE_URL = '/api/auth'

export async function requestSignupOtp(
  payload: SignupRequest,
): Promise<AuthResult> {
  const response = await fetch(`${API_BASE_URL}/signup/request-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    return {
      success: false,
      message: 'Unable to send verification code.',
    }
  }

  return {
    success: true,
  }
}

export async function verifySignupOtp(
  email: string,
  otp: string,
): Promise<AuthResult> {
  const response = await fetch(`${API_BASE_URL}/signup/verify-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, otp }),
  })

  if (!response.ok) {
    return {
      success: false,
      message: 'Invalid or expired verification code.',
    }
  }

  return {
    success: true,
  }
}

export async function login(
  email: string,
  password: string,
): Promise<AuthResult> {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    return {
      success: false,
      message: 'Unable to sign in.',
    }
  }

  return {
    success: true,
  }
}