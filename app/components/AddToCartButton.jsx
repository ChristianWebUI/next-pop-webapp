'use client'
import { useStoreContext } from '@/context/StoreContext'
import { GET_PRODUCT_STOCK_COUNT } from '@/graphql/queries/getProductStockCount'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useMemo } from 'react'

function useProductStockById(id) {
  const { data, loading, error } = useQuery(GET_PRODUCT_STOCK_COUNT, {
    variables: { id }
  })

  const memoizedData = useMemo(() => data, [data])

  return {
    data: memoizedData,
    loading,
    error
  }
}

export default function AddToCartButton({ product, fromProductCard = false }) {
  const { state, dispatch } = useStoreContext()
  const { data } = useProductStockById(product._id)
  const router = useRouter()
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems?.find(
      (cartItem) => cartItem.slug === product.slug
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (data?.getProductStockCount < quantity) {
      alert('Sorry. Product is out of stock') // TODO: Handle notifications with proper toast message or library
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
    if (!fromProductCard) router.push('/cart')
    // TODO: Handle a new notification to say to user that product has been added successfully
  }
  return (
    <button
      className={`primary-button${!fromProductCard ? ' w-full' : ''}`}
      onClick={addToCartHandler}
    >
      Add to cart
    </button>
  )
}
