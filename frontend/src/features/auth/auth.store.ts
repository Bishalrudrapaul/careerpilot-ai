const AUTH_KEY = 'careerpilot_authenticated'
const TOKEN_KEY = 'careerpilot_token'

export function isAuthenticated(): boolean {
  return localStorage.getItem(AUTH_KEY) === 'true'
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

export function setAuthenticated(value: boolean, token?: string): void {
  if (value) {
    localStorage.setItem(AUTH_KEY, 'true')

    if (token) {
      localStorage.setItem(TOKEN_KEY, token)
    }

    return
  }

  localStorage.removeItem(AUTH_KEY)
  localStorage.removeItem(TOKEN_KEY)
}

export function logout(): void {
  setAuthenticated(false)
}