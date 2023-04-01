import { useStoreContext } from '@/context/StoreContext'
import { clearCookie, STORAGE_KEYS } from '@/utils/storage'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export function useHandleSignOut() {
  const { dispatch } = useStoreContext()
  const handleSignOut = () => {
    clearCookie(STORAGE_KEYS.cart)
    dispatch({ type: 'CART_RESET' })
    signOut({ callbackUrl: '/login' })
  }
  return handleSignOut
}

export function useSessionStatus() {
  const { status, data: session } = useSession()
  useEffect(() => {
    if (session?.user) {
      console.log(`Logged in as ${session.user.email}`)
    }
  }, [session])
  return { status, session }
}
