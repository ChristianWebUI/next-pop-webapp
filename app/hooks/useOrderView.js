import {
  COP_CURRENCY_CODE,
  MERCADOPAGO,
  MERCADOPAGO_PUBLIC_KEY,
  PAYPAL,
  USD_CURRENCY_CODE,
  mercadoPagoCustomization
} from '@/constants/payment'
import { CAPTURE_PAYPAL_PAYMENT } from '@/graphql-mutations/capturePayPalPayment'
import { CREATE_PAYPAL_ORDER } from '@/graphql-mutations/createPayPalOrder'
import { NEW_PREFERENCE } from '@/graphql-mutations/newPreference'
import { GET_ORDER_BY_ID } from '@/graphql-queries/getOrderById'
import { GET_PAYPAL_CLIENT_ID } from '@/graphql-queries/getPaypalClientId'
import { getErrorMessage } from '@/utils/error'
import { formatCurrencyInCop } from '@/utils/price'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { useFormatter } from 'next-intl'
import { useEffect, useState } from 'react'

export default function useOrderView({ orderId }) {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer()
  const [order, setOrder] = useState(null)
  const [loadingPay, setLoadingPay] = useState(false)
  const [preferenceId, setPreferenceId] = useState(null)
  const format = useFormatter()
  const [createPayPalOrder] = useMutation(CREATE_PAYPAL_ORDER)
  const [capturePayPalPayment] = useMutation(CAPTURE_PAYPAL_PAYMENT, {
    onCompleted: async () => {
      setLoadingPay(false)
      await refetch()
    }
  })
  const [newPreference] = useMutation(NEW_PREFERENCE, {
    variables: { storeOrderId: orderId }
  })
  const [paypalClientId] = useLazyQuery(GET_PAYPAL_CLIENT_ID)
  const { loading, error, data, refetch } = useQuery(GET_ORDER_BY_ID, {
    variables: { id: orderId },
    onCompleted: async (data) => {
      try {
        if (
          data?.getOrderById?.paymentMethod === MERCADOPAGO &&
          !data?.getOrderById?.isPaid
        ) {
          initMercadoPago(MERCADOPAGO_PUBLIC_KEY)
          const { data } = await newPreference()
          setPreferenceId(data?.newPreference.preferenceId)
        }
        if (
          data?.getOrderById?.paymentMethod === PAYPAL &&
          !data?.getOrderById?.isPaid
        ) {
          const {
            data: { paypalClientId: clientId }
          } = await paypalClientId()
          paypalDispatch({
            type: 'resetOptions',
            value: {
              'client-id': clientId,
              currency: USD_CURRENCY_CODE
            }
          })
          paypalDispatch({ type: 'setLoadingStatus', value: 'pending' })
        }
      } catch (error) {
        console.log(error)
      }
    }
  })

  const renderPaymentButton = () => {
    if (order && order.paymentMethod === MERCADOPAGO) {
      if (!preferenceId) {
        return <div>Cargando boton de compra...</div>
      } else {
        return (
          <div className="w-full">
            <Wallet
              initialization={{ preferenceId }}
              customization={mercadoPagoCustomization}
            />
          </div>
        )
      }
    } else if (order && order.paymentMethod === PAYPAL) {
      return isPending ? (
        <div>Cargando boton de compra...</div>
      ) : (
        <>
          <div className="w-full">
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onCancel={onCancel}
              onError={onError}
            />
          </div>
          {loadingPay && <div>Loading Payment...</div>}
        </>
      )
    }
  }

  useEffect(() => {
    if (data) {
      setOrder(data?.getOrderById)
    }
  }, [data])

  const createOrder = async () => {
    const {
      data: {
        createPayPalOrder: { id: paypalOrderId }
      }
    } = await createPayPalOrder({
      variables: {
        orderData: {
          fromCurrencyCode: COP_CURRENCY_CODE,
          currencyCode: USD_CURRENCY_CODE,
          orderId
        }
      }
    })
    return paypalOrderId
  }

  const onApprove = async (data) => {
    try {
      setLoadingPay(true)
      const { orderID } = data
      await capturePayPalPayment({
        variables: { paymentData: { paypalOrderId: orderID, orderId } }
      })
      alert('Order has been successfully paid!')
    } catch (error) {
      alert(getErrorMessage(error))
    }
  }

  const onCancel = async (data) => {
    const { orderID } = data
    alert(`Order ${orderID} has been canceled from Paypal portal`)
  }

  const onError = (err) => {
    alert(getErrorMessage(err))
  }

  const formatCurrency = (amount) => formatCurrencyInCop(format, amount)

  return {
    loading,
    error: error ? getErrorMessage(error) : null,
    order,
    renderPaymentButton,
    formatCurrency
  }
}
