'use client'
import { useStoreContext } from '@/context/StoreContext'
import Link from 'next/link'

export default function CartNavigationLink({ route, label }) {
  const { state } = useStoreContext()
  const { cart } = state
  return (
    <Link href={route} className="p-2">
      {label}
      {cart.cartItems?.length > 0 && (
        <span className="ml-1 rounded-full bg-red-600 py-1 px-2 text-xs font-bold text-white">
          {cart.cartItems.reduce(
            (totalItems, cartItem) => totalItems + cartItem.quantity,
            0
          )}
        </span>
      )}
    </Link>
  )
}
