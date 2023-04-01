import { useStoreContext } from '@/context/StoreContext'
import { GET_PRODUCT_STOCK_COUNT } from '@/graphql/queries/getProductStockCount'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/navigation'

export default function useCartAddItem(
  product,
  fromProductCard = false,
  redirecrUrl
) {
  const { state, dispatch } = useStoreContext()
  const router = useRouter()
  const { data, loading, error } = useQuery(GET_PRODUCT_STOCK_COUNT, {
    variables: { id: product._id }
  })
  const addToCartHandler = () => {
    if (loading) {
      alert('Loading product stock count... Please wait...')
      return
    }
    if (error) {
      alert('Failed to load product stock count.')
      return
    }
    const existItem = state.cart.cartItems?.find(
      (cartItem) => cartItem.slug === product.slug
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (data?.getProductStockCount < quantity) {
      alert('Sorry. Product is out of stock')
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
    if (!fromProductCard) router.push(redirecrUrl)
  }
  return [addToCartHandler]
}
