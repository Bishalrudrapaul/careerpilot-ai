import { createContext } from 'react'

export interface AuthContextValue {
  authenticated: boolean
  signIn: () => void
  signOut: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)