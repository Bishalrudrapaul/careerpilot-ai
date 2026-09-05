import { useMemo, useState } from 'react'
import {
  isAuthenticated as readAuthState,
  logout as clearAuthState,
  setAuthenticated,
} from './auth.store'
import { AuthContext } from './AuthContextDefinition'

export function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [authenticated, setAuthenticatedState] =
    useState(readAuthState())

  const value = useMemo(
    () => ({
      authenticated,

      signIn: (token?: string) => {
        setAuthenticated(true, token)
        setAuthenticatedState(true)
      },

      signOut: () => {
        clearAuthState()
        setAuthenticatedState(false)
      },
    }),
    [authenticated],
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}