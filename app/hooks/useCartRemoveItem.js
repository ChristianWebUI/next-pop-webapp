import { useStoreContext } from '@/context/StoreContext'

export default function useCartRemoveItem() {
  const { dispatch } = useStoreContext()

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }

  return removeItemHandler
}
