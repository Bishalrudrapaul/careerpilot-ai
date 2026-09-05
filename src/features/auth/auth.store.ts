const AUTH_KEY = 'careerpilot_authenticated'

export function isAuthenticated(): boolean {
  return localStorage.getItem(AUTH_KEY) === 'true'
}

export function setAuthenticated(value: boolean): void {
  if (value) {
    localStorage.setItem(AUTH_KEY, 'true')
    return
  }

  localStorage.removeItem(AUTH_KEY)
}

export function logout(): void {
  setAuthenticated(false)
}