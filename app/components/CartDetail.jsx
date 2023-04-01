'use client'
import CartItemsList from '@/components/CartItemsList'
import { useStoreContext } from '@/context/StoreContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CartDetail() {
  const { state, dispatch } = useStoreContext()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const {
    cart: { cartItems }
  } = state
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }

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
