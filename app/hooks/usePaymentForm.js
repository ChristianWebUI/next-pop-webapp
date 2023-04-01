import { useStoreContext } from '@/context/StoreContext'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function usePaymentForm() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const { state, dispatch } = useStoreContext()
  const router = useRouter()
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
    router.push('/placeorder')
  }

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push('/shipping')
    }
    setSelectedPaymentMethod(paymentMethod || '')
  }, [router, paymentMethod, shippingAddress.address])

  return {
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    handleSubmit,
    shippingAddress
  }
}
