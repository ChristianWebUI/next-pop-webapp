import { useStoreContext } from '@/context/StoreContext'

export default function useCartRemoveItem() {
  const { state, dispatch } = useStoreContext()
  const {
    cart: { cartItems }
  } = state
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }

  return [removeItemHandler, cartItems]
}
