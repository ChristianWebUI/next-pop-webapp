import { useStoreContext } from '@/context/StoreContext'
import { useEffect, useState } from 'react'

export default function useCartItemsCount() {
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

  return cartItemsCount
}
