'use client'
import {
  BACK_BUTTON_TITLE,
  CHOOSE_PAYMENT_METHOD_TITLE,
  NEXT_BUTTON_TITLE,
  SHIPPING_ADDRESS_PAGE
} from '@/constants/checkout'
import { INCOMING_MESSAGE, PAYMENT_METHODS } from '@/constants/payment'
import usePaymentForm from '@/hooks/usePaymentForm'
import Image from 'next/image'
import Link from 'next/link'

export default function PaymentFormLegacy() {
  const { onSubmit, register, errors } = usePaymentForm()
  const displayIcons = (id) => {
    const allowedMethods = ['paypal', 'mercadopago']
    if (allowedMethods.some((m) => m === id)) {
      return (
        <div className="flex justify-evenly w-full">
          <Image
            src="/images/visa.svg"
            alt="av-met-visa"
            width={15}
            height={15}
            quality={100}
            priority
            className="w-15 h-15 top-0 left-0 object-scale-down"
          />
          <Image
            src="/images/mastercard.svg"
            alt="av-met-master"
            width={15}
            height={15}
            quality={100}
            priority
            className="w-15 h-15 top-0 left-0 object-scale-down"
          />
          <Image
            src="/images/maestro.svg"
            alt="av-met-maestro"
            width={15}
            height={15}
            quality={100}
            priority
            className="w-15 h-15 top-0 left-0 object-scale-down"
          />
          {id !== 'paypal' && (
            <>
              <Image
                src="/images/pse.svg"
                alt="av-met-pse"
                width={15}
                height={15}
                quality={100}
                priority
                className="w-15 h-15 top-0 left-0 object-scale-down"
              />
              <Image
                src="/images/cash.png"
                alt="av-met-cash"
                width={15}
                height={15}
                quality={100}
                priority
                className="w-15 h-15 top-0 left-0 object-scale-down"
              />
            </>
          )}
        </div>
      )
    }
  }
  return (
    <form onSubmit={onSubmit} className="w-full max-w-screen-md mx-auto">
      <fieldset className="space-y-12">
        <div className="flex items-center justify-between py-4 border-b border-gray-300">
          <legend className="text-2xl mr-4">
            {CHOOSE_PAYMENT_METHOD_TITLE}
          </legend>
        </div>
        <div className="grid sm:grid-cols-5 gap-6">
          {PAYMENT_METHODS.map(({ id, icon, value, disabled }) => (
            <label
              key={id}
              htmlFor={id}
              className={`radio-group relative flex flex-col items-center justify-center bg-white p-3 rounded-lg shadow-md cursor-pointer ${
                disabled ? 'pointer-events-none' : ''
              }`}
            >
              {disabled && (
                <div className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-700 rounded-full">
                  {INCOMING_MESSAGE}
                </div>
              )}
              <Image
                src={icon}
                alt={value}
                width={70}
                height={70}
                quality={100}
                priority
                className="w-full h-full top-0 left-0 object-scale-down"
              />
              {displayIcons(id)}
              <input
                type="radio"
                name="payment"
                id={id}
                {...register('paymentMethod')}
                value={value}
                disabled={disabled}
                className="absolute h-0 w-0 appearance-none"
              />
              <span
                aria-hidden="true"
                className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
              >
                <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 text-green-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </span>
            </label>
          ))}
        </div>
        {errors.paymentMethod && (
          <div className="flex justify-center text-red-500">
            {errors.paymentMethod.message}
          </div>
        )}
        <div className="flex justify-between">
          <Link
            type="button"
            href={SHIPPING_ADDRESS_PAGE}
            className="default-button"
          >
            {BACK_BUTTON_TITLE}
          </Link>
          <button type="submit" className="primary-button">
            {NEXT_BUTTON_TITLE}
          </button>
        </div>
      </fieldset>
    </form>
  )
}
