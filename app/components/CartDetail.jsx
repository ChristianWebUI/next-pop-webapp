'use client'
import CartItemsList from '@/components/CartItemsList'
import { HOME_PAGE } from '@/constants/checkout'
import useCartItems from '@/hooks/useCartItems'
import useCartRemoveItem from '@/hooks/useCartRemoveItem'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CartDetail() {
  const removeItemHandler = useCartRemoveItem()
  const cartItems = useCartItems()
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
            Cart is empty.{' '}
            <Link className=" text-blue-700" href={HOME_PAGE}>
              Go shopping
            </Link>
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
