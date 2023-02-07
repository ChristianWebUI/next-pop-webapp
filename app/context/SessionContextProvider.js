'use client'
import { SessionProvider as SessionContextProvider } from 'next-auth/react'

export default function SessionProvider({ session, children }) {
  return (
    <SessionContextProvider session={session}>
      {children}
    </SessionContextProvider>
  )
}
