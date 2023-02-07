'use client'
import { useStoreContext } from '@/context/StoreContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CartNavigationLink({ key, route, label }) {
  const { state } = useStoreContext()
  const { cart } = state
  const [cartItemsCount, setCartItemsCount] = useState(0)
  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce(
        (totalItems, cartItem) => totalItems + cartItem.quantity,
        0
      )
    )
  }, [cart.cartItems])
  return (
    <Link key={key} href={route} className="p-2">
      {label}
      {cartItemsCount > 0 && (
        <span className="ml-1 rounded-full bg-red-600 py-1 px-2 text-xs font-bold text-white">
          {cartItemsCount}
        </span>
      )}
    </Link>
  )
}
