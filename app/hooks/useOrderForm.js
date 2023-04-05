import {
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_PRICE,
  TAX_VALUE
} from '@/constants/order'
import { useCheckoutContext } from '@/context/CheckoutContextProvider'
import { useStoreContext } from '@/context/StoreContext'
import { CREATE_ORDER_MUTATION } from '@/graphql-mutations/createOrder'
import useCartItems from '@/hooks/useCartItems'
import { roundTwoDecimals } from '@/utils/price'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function useOrderForm() {
  const [createOrder, { loading, error }] = useMutation(CREATE_ORDER_MUTATION)
  const { goToPreviousStep } = useCheckoutContext()
  const cartItems = useCartItems()
  const router = useRouter()
  const { state, dispatch } = useStoreContext()
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

  const placeOrderHandler = async (e) => {
    e.preventDefault()
    const orderData = {
      orderItems: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        image: item.image,
        price: item.price,
        slug: item.slug
      })),
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice
    }
    const { data } = await createOrder({ variables: orderData })
    dispatch({ type: 'CART_CLEAR_ITEMS' })
    const orderId = data?.createOrder._id
    router.push(`/order/${orderId}`)
  }

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
    totalPrice,
    loading,
    error,
    placeOrderHandler
  }
}
