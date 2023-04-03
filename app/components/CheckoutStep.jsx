/* eslint-disable multiline-ternary */
'use client'
import { useCheckoutContext } from '@/context/CheckoutContextProvider'

export default function CheckoutStep({ stepName, index }) {
  const { currentIndex } = useCheckoutContext()
  return (
    <div
      className={`flex-1 border-b-2 text-center ${
        index <= currentIndex + 1
          ? 'border-indigo-500 text-indigo-500'
          : 'border-gray-400 text-gray-400'
      }`}
    >
      {stepName}
    </div>
  )
}
