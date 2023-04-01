'use client'
import useCartItemsCount from '@/hooks/useCartItemsCount'

export default function CartBadge() {
  const cartItemsCount = useCartItemsCount()

  return cartItemsCount > 0 ? (
    <span className="ml-1 rounded-full bg-red-600 py-1 px-2 text-xs font-bold text-white">
      {cartItemsCount}
    </span>
  ) : null
}
