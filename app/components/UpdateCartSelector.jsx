'use client'
import useCartUpdateItem from '@/hooks/useCartUpdateItem'

export default function QuantitySelector({ quantity, itemsInStock, product }) {
  const [updateCartHandler] = useCartUpdateItem(product)

  return (
    <select
      className="w-[35%] text-center text-sm font-semibold"
      value={quantity}
      onChange={(e) => updateCartHandler(e.target.value)}
    >
      {[...Array(itemsInStock).keys()].map((number) => (
        <option key={number + 1} value={number + 1}>
          {number + 1}
        </option>
      ))}
    </select>
  )
}
