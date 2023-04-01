'use client'
import { AVAILABLE_PAYMENT_METHODS } from '@/constants/payment'
import usePaymentForm from '@/hooks/usePaymentForm'
import Link from 'next/link'

export default function PaymentForm() {
  const { selectedPaymentMethod, setSelectedPaymentMethod, handleSubmit } =
    usePaymentForm()
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-screen-md">
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
