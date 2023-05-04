import { SHIPPING_PRICE, TAX_VALUE } from '@/constants/order'
import { COP_CURRENCY_CODE } from '@/constants/payment'
import { useCheckoutContext } from '@/context/CheckoutContextProvider'
import { useStoreContext } from '@/context/StoreContext'
import { CREATE_ORDER_MUTATION } from '@/graphql-mutations/createOrder'
import useCartItems from '@/hooks/useCartItems'
import { roundTwoDecimals } from '@/utils/price'
import { getPlainPhoneNumber } from '@/utils/text'
import { useMutation } from '@apollo/client'
import { useFormatter } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function useOrderForm() {
  const [createOrder, { loading, error }] = useMutation(CREATE_ORDER_MUTATION)
  const { goToPreviousStep } = useCheckoutContext()
  const cartItems = useCartItems()
  const format = useFormatter()
  const router = useRouter()
  const { state, dispatch } = useStoreContext()
  const {
    cart: { shippingInfo, paymentMethod }
  } = state

  const itemsPrice = roundTwoDecimals(
    cartItems.reduce(
      (valueOfItems, item) => valueOfItems + item.quantity * item.price,
      0
    )
  )
  const { shippingCost: shippingPrice = SHIPPING_PRICE } =
    shippingInfo.deliveryData || {}
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
      shippingInfo: {
        fullName: shippingInfo.fullName,
        cellPhone: getPlainPhoneNumber(shippingInfo.cellPhone),
        address: shippingInfo.address,
        department: shippingInfo.department,
        city: shippingInfo.city,
        country: shippingInfo.country?.name,
        isCashOnDelivery: shippingInfo.isCashOnDelivery,
        ...(shippingInfo?.nitType && { nitType: shippingInfo.nitType }),
        ...(shippingInfo?.nit && { nit: shippingInfo.nit }),
        ...(shippingInfo?.deliveryCompany && {
          deliveryCompany: shippingInfo.deliveryCompany
        })
      },
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

  const formatCurrency = (cost) => {
    return format.number(cost, {
      style: 'currency',
      currency: COP_CURRENCY_CODE,
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true
    })
  }

  return {
    shippingInfo,
    paymentMethod,
    itemsPrice,
    cartItems,
    shippingPrice,
    taxPrice,
    totalPrice,
    loading,
    error,
    formatCurrency,
    placeOrderHandler
  }
}
