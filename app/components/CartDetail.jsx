'use client'
import CartItemsList from '@/components/CartItemsList'
import useCartRemoveItem from '@/hooks/useCartRemoveItem'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CartDetail() {
  const [removeItemHandler, cartItems] = useCartRemoveItem()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <h1 className="mb-4 text-xl">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div>
            Cart is empty. <Link href="/">Go shopping</Link>
          </div>
        ) : (
          <CartItemsList
            cartItems={cartItems}
            onClickHandler={removeItemHandler}
          />
        )}
      </>
    )
  )
}
