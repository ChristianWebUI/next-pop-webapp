'use client'
import { AVAILABLE_PAYMENT_METHODS } from '@/constants/payment'
import { useStoreContext } from '@/context/StoreContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PaymentForm() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
  const { state, dispatch } = useStoreContext()
  const router = useRouter()
  const {
    cart: { shippingAddress, paymentMethod }
  } = state
  const submitHandler = (e) => {
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
  return (
    <form onSubmit={submitHandler} className="mx-auto max-w-screen-md">
      <h1 className="mb-4 text-xl">Payment Mehtod</h1>
      {AVAILABLE_PAYMENT_METHODS.map((payment) => (
        <div key={payment} className="mb-4">
          <input
            type="radio"
            name="paymentMethod"
            id={payment}
            className="p-2 outline-none focus:ring-0"
            checked={selectedPaymentMethod === payment}
            onChange={() => setSelectedPaymentMethod(payment)}
          />
          <label className="p-2" htmlFor={payment}>
            {payment}
          </label>
        </div>
      ))}
      <div className="mb-4 flex justify-between">
        <Link href="/shipping" className="default-button">
          Back
        </Link>
        <button className="primary-button">Next</button>
      </div>
    </form>
  )
}
