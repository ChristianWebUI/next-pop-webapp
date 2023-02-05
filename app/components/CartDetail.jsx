'use client'
import CartItemsList from '@/components/CartItemsList'
import { useStoreContext } from '@/context/StoreContext'
import Link from 'next/link'

export default function CartDetail() {
  const { state, dispatch } = useStoreContext()
  const {
    cart: { cartItems }
  } = state
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }
  const updateCartHandler = (item, selectedNumber) => {
    const quantity = Number(selectedNumber)
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
  }

  return (
    <>
      <h1 className="mb-4 text-xl">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <CartItemsList
          cartItems={cartItems}
          onClickHanlder={removeItemHandler}
          onChangeHandler={updateCartHandler}
        />
      )}
    </>
  )
}
