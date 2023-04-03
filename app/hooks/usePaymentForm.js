import { useCheckoutContext } from '@/context/CheckoutContextProvider'
import { useStoreContext } from '@/context/StoreContext'
import { useEffect, useState } from 'react'

export default function usePaymentForm() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const { state, dispatch } = useStoreContext()
  const { goToNextStep, goToPreviousStep } = useCheckoutContext()
  const {
    cart: { shippingAddress, paymentMethod }
  } = state

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedPaymentMethod) {
      alert('Payment Method is required') // TODO: Handle notifications with proper toast message or library
      return
    }
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: selectedPaymentMethod })
    goToNextStep()
  }

  useEffect(() => {
    if (!shippingAddress.address) {
      return goToPreviousStep()
    }
    setSelectedPaymentMethod(paymentMethod || '')
  }, [goToPreviousStep, paymentMethod, shippingAddress.address])

  return {
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    handleSubmit,
    goToPreviousStep
  }
}
