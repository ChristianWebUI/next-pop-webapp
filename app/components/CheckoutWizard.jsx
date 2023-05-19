'use client'
import { CHECKOUT_STEPS_NAMES } from '@/constants/checkout'
import { useCheckoutContext } from '@/context/CheckoutContextProvider'
import { useEffect, useRef } from 'react'
import CheckoutStep from './CheckoutStep'

export default function CheckoutWizard() {
  const { currentIndex } = useCheckoutContext()
  const currentStep = currentIndex + 2
  const statusBarRef = useRef(null)
  useEffect(() => {
    if (statusBarRef.current) {
      statusBarRef.current.style.width = `${
        ((currentStep - 1) / (CHECKOUT_STEPS_NAMES.length - 1)) * 100
      }%`
    }
  }, [currentStep])
  return (
    <section
      id="checkout-wizard"
      className="section-p1 flex flex-col justify-around items-center md:w-[70vw] w-[90vw] h-[15vh] mx-auto"
    >
      <div className="w-full flex justify-between items-center relative before:content-[''] before:w-full before:h-[5px] before:bg-primary-nav-color before:absolute before:top-2/4 before:left-0 before:-translate-y-2/4 before:-z-[1]">
        <div
          ref={statusBarRef}
          style={{ width: '0%' }}
          className="absolute h-[5px] bg-primary-accent-color top-2/4 left-0 -translate-y-2/4 status-bar"
        />
        {CHECKOUT_STEPS_NAMES.map(({ stepName, icon }, index) => {
          return (
            <CheckoutStep
              key={stepName}
              icon={icon()}
              index={index}
              currentStep={currentStep}
            />
          )
        })}
      </div>
    </section>
  )
}
