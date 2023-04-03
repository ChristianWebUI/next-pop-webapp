'use client'
import {
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_PRICE,
  TAX_VALUE
} from '@/constants/order'
import { useCheckoutContext } from '@/context/CheckoutContextProvider'
import { useStoreContext } from '@/context/StoreContext'
import useCartItems from '@/hooks/useCartItems'
import { roundTwoDecimals } from '@/utils/price'
import { useEffect } from 'react'

export default function useOrderForm() {
  const { goToPreviousStep } = useCheckoutContext()
  const cartItems = useCartItems()
  const { state } = useStoreContext()
  const {
    cart: { shippingAddress, paymentMethod }
  } = state

  const itemsPrice = roundTwoDecimals(
    cartItems.reduce(
      (valueOfItems, item) => valueOfItems + item.quantity * item.price,
      0
    )
  )
  const shippingPrice =
    itemsPrice > FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_PRICE
  const taxPrice = roundTwoDecimals(itemsPrice * TAX_VALUE)
  const totalPrice = roundTwoDecimals(itemsPrice + shippingPrice + taxPrice)

  useEffect(() => {
    if (!paymentMethod) {
      return goToPreviousStep(true)
    }
  }, [goToPreviousStep, paymentMethod])

  return {
    shippingAddress,
    paymentMethod,
    itemsPrice,
    cartItems,
    shippingPrice,
    taxPrice,
    totalPrice
  }
}
