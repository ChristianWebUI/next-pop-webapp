'use client'
import {
  CHECKOUT_STEPS,
  PAYMENT_METHOD_PAGE,
  SHIPPING_ADDRESS_PAGE
} from '@/constants/checkout'
import { usePathname, useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

const CheckoutContext = createContext({})

export default function CheckoutProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [currentStep, setCurrentStep] = useState(
    pathname.replace('/', '') || CHECKOUT_STEPS[0]
  )

  const currentIndex = CHECKOUT_STEPS.indexOf(pathname.replace('/', ''))

  const goToStep = (step) => {
    if (CHECKOUT_STEPS.includes(step)) {
      setCurrentStep(step)
      router.push(`/${step}`)
    } else {
      console.error(`Step "${step}" not found`)
    }
  }

  const goToPreviousStep = (isOrder = false) => {
    if (isOrder) {
      return router.push(`/${PAYMENT_METHOD_PAGE}`)
    }
    router.push(`/${SHIPPING_ADDRESS_PAGE}`)
  }

  const goToNextStep = () => {
    if (currentIndex < CHECKOUT_STEPS.length - 1) {
      const nextPage = CHECKOUT_STEPS[currentIndex + 1]
      setCurrentStep(nextPage)
      router.push(`/${nextPage}`)
    }
  }

  useEffect(() => {
    const handleHistoryChange = () => {
      const stepFromUrl = pathname.replace('/', '')
      if (CHECKOUT_STEPS.includes(stepFromUrl)) {
        setCurrentStep(stepFromUrl)
      }
    }

    window.addEventListener('popstate', handleHistoryChange)

    return () => {
      window.removeEventListener('popstate', handleHistoryChange)
    }
  }, [currentStep, pathname])

  return (
    <CheckoutContext.Provider
      value={{
        goToNextStep,
        goToStep,
        goToPreviousStep,
        currentStep,
        currentIndex
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export const useCheckoutContext = () => useContext(CheckoutContext)
