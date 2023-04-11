import {
  MERCADOPAGO,
  MERCADOPAGO_PUBLIC_KEY,
  mercadoPagoCustomization
} from '@/constants/payment'
import { NEW_PREFERENCE } from '@/graphql-mutations/newPreference'
import { GET_ORDER_BY_ID } from '@/graphql-queries/getOrderById'
import { getErrorMessage } from '@/utils/error'
import { useMutation, useQuery } from '@apollo/client'
import { Wallet, initMercadoPago } from '@mercadopago/sdk-react'
import { useEffect, useState } from 'react'

export default function useOrderView({ orderId }) {
  const [order, setOrder] = useState(null)
  const [preferenceId, setPreferenceId] = useState(null)
  const [newPreference] = useMutation(NEW_PREFERENCE, {
    variables: { storeOrderId: orderId }
  })
  const { loading, error, data } = useQuery(GET_ORDER_BY_ID, {
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
      } catch (error) {
        console.log(error)
      }
    }
  })

  const renderPaymentButton = () => {
    if (!preferenceId) {
      return <div>Cargando boton de compra...</div>
    } else {
      return (
        <Wallet
          initialization={{ preferenceId }}
          customization={mercadoPagoCustomization}
        />
      )
    }
  }

  useEffect(() => {
    if (data) setOrder(data?.getOrderById)
  }, [data])

  return {
    loading,
    error: error ? getErrorMessage(error) : null,
    order,
    renderPaymentButton
  }
}
