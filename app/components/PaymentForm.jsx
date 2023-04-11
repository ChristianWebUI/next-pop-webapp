'use client'
import { SHIPPING_ADDRESS_PAGE } from '@/constants/checkout'
import { PAYMENT_METHODS } from '@/constants/payment'
import usePaymentForm from '@/hooks/usePaymentForm'
import Link from 'next/link'

export default function PaymentForm() {
  const { selectedPaymentMethod, setSelectedPaymentMethod, handleSubmit } =
    usePaymentForm()
  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-screen-md">
      <h1 className="mb-4 text-xl">Payment Mehtod</h1>
      {PAYMENT_METHODS.map(({ id, value }) => (
        <div key={id} className="mb-4">
          <input
            type="radio"
            name="paymentMethod"
            id={id}
            className="p-2 outline-none focus:ring-0"
            checked={selectedPaymentMethod === value}
            onChange={() => setSelectedPaymentMethod(value)}
          />
          <label className="p-2" htmlFor={id}>
            {value}
          </label>
        </div>
      ))}
      <div className="mb-4 flex justify-between">
        <Link href={SHIPPING_ADDRESS_PAGE} className="default-button">
          Back
        </Link>
        <button className="primary-button">Next</button>
      </div>
    </form>
  )
}
