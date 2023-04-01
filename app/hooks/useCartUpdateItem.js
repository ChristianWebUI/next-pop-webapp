import { useStoreContext } from '@/context/StoreContext'
import { GET_PRODUCT_STOCK_COUNT } from '@/graphql/queries/getProductStockCount'
import { useQuery } from '@apollo/client'

export default function useCartUpdateItem(product) {
  const { dispatch } = useStoreContext()
  const { data, loading, error } = useQuery(GET_PRODUCT_STOCK_COUNT, {
    variables: { id: product._id }
  })

  const updateCartHandler = (selectedNumber) => {
    if (loading) {
      alert('Updating cart... Please wait...')
      return
    }
    if (error) {
      alert('Error updating cart.')
      return
    }
    const quantity = Number(selectedNumber)
    if (data?.getProductStockCount < quantity) {
      alert('Sorry. Product is out of stock') // TODO: Handle notifications with proper toast message or library
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
    // TODO: update notification
  }
  return [updateCartHandler]
}
