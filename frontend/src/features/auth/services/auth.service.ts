export interface SignupRequest {
  fullName: string
  email: string
  password: string
}

export interface AuthResult {
  success: boolean
  message?: string
  session?: unknown
  user?: unknown
}

const API_BASE_URL = 'http://localhost:5000/api/auth'

async function parseResponse(response: Response): Promise<AuthResult> {
  try {
    return await response.json()
  } catch {
    return {
      success: false,
      message: 'Invalid response from server.',
    }
  }
}

export async function requestSignupOtp(
  payload: SignupRequest,
): Promise<AuthResult> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/signup/request-otp`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    )

    return await parseResponse(response)
  } catch {
    return {
      success: false,
      message: 'Unable to connect to the backend.',
    }
  }
}

export async function verifySignupOtp(
  email: string,
  otp: string,
): Promise<AuthResult> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/signup/verify-otp`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      },
    )

    return await parseResponse(response)
  } catch {
    return {
      success: false,
      message: 'Unable to connect to the backend.',
    }
  }
}

export async function login(
  email: string,
  password: string,
): Promise<AuthResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    return await parseResponse(response)
  } catch {
    return {
      success: false,
      message: 'Unable to connect to the backend.',
    }
  }
}