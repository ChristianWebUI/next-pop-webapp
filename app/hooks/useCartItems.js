import { useStoreContext } from '@/context/StoreContext'

export default function useCartItems() {
  const { state } = useStoreContext()
  const {
    cart: { cartItems }
  } = state

  return cartItems
}
