'use client'
import { useStoreContext } from '@/context/StoreContext'

export default function AddToCartButton({ product }) {
  const { state, dispatch } = useStoreContext()
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (cartItem) => cartItem.slug === product.slug
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock')
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } })
  }
  return (
    <button className="primary-button w-full" onClick={addToCartHandler}>
      Add to cart
    </button>
  )
}
