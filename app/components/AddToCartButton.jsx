'use client'
import useCartAddItem from '@/hooks/useCartAddItem'

export default function AddToCartButton({ product, fromProductCard = false }) {
  const [addToCartHandler] = useCartAddItem(product, fromProductCard, '/cart')
  return (
    <button
      className={`primary-button${!fromProductCard ? ' w-full' : ''}`}
      onClick={addToCartHandler}
    >
      Add to cart
    </button>
  )
}
