'use client'
import {
  BACK_BUTTON_TITLE,
  CHOOSE_PAYMENT_METHOD_TITLE,
  NEXT_BUTTON_TITLE
} from '@/constants/checkout'
import {
  BANK_TRANSFER,
  INCOMING_MESSAGE,
  PAYMENT_METHODS
} from '@/constants/payment'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon
} from '@heroicons/react/24/solid'
import classnames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

const displayIcons = (id) => {
  const allowedMethods = ['paypal', 'mercadopago']
  if (allowedMethods.some((m) => m === id)) {
    return (
      <div className="hidden md:flex justify-evenly w-full">
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

export default function PaymentForm() {
  const [showPanel, setShowPanel] = useState(false)
  return (
    <section
      id="payment-form"
      className="flex flex-col m-3 p-[30px_10px] md:m-8 lg:px-20 lg:py-10 md:p-10 border border-solid border-input-border-color"
    >
      <h2 className="w-full flex items-center justify-center mb-4">
        {CHOOSE_PAYMENT_METHOD_TITLE}
      </h2>
      <form className="relative flex flex-wrap justify-center items-center">
        {/* Main Panel */}
        <section
          id="payment-methods"
          className="w-full max-w-screen-md mx-auto md:p-8 p-4 mb-2"
        >
          {/* Methods Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 md:grid-rows-1 lg:gap-6 gap-3">
            {PAYMENT_METHODS.map(({ id, icon, value, disabled }) => (
              <label
                key={id}
                htmlFor={id}
                className={classnames(
                  'radio-group relative flex flex-col lg:h-[7.8rem] md:h-[6rem] items-center justify-center bg-white p-3 rounded-lg shadow-md cursor-pointer w-full h-[9.375rem] mx-auto',
                  { 'pointer-events-none': disabled }
                )}
              >
                {disabled && (
                  <div className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 lg:text-xs text-[8px] font-bold leading-none text-white bg-primary-accent-color rounded-full">
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
                  className={classnames(
                    'w-full h-full top-0 left-0 object-scale-down'
                  )}
                />
                {displayIcons(id)}
                <input
                  type="radio"
                  name="payment"
                  id={id}
                  value={value}
                  disabled={disabled}
                  className="absolute h-0 w-0 appearance-none"
                  onChange={(e) =>
                    setShowPanel(e.target.value === BANK_TRANSFER)
                  }
                />
                <span
                  aria-hidden="true"
                  className="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-lg"
                >
                  <span className="absolute top-1 right-1 lg:h-6 lg:w-6 w-5 h-5 inline-flex items-center justify-center rounded-full bg-green-200">
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
        </section>
        {/* Steps for Bancolombia Transfer */}
        <div
          className={classnames('w-full md:p-8 p-4 slide-in', {
            'slide-in-active': showPanel
          })}
        >
          <ol className="flex flex-wrap">
            <li className="flex-1 flex flex-col text-center before:content-[''] before:relative before:z-[1] before:block before:w-12 before:h-12 before:rounded-full before:mt-0 before:mb-4 before:mx-auto before:bg-primary-accent-color after:content-[''] after:relative after:top-[calc(var(--circle-size)_/_2)] after:w-[calc(100%_-_var(--circle-size)_-_calc(var(--spacing)_*_2))] after:left-[calc(50%_+_calc(var(--circle-size)_/_2_+_var(--spacing)))] after:h-0.5 after:bg-primary-border-color after:-order-1">
              <h3 className="font-bold text-base md:text-[4w] xl:text-xl mb-2">
                Step 1
              </h3>
              <p className="text-[0.85rem] md:2vw xl:text-base pl-[var(--spacing)] max-w-xs mx-auto">
                Verifica el valor a transferir al <strong>finalizar</strong> tu
                orden
              </p>
            </li>
            <li className="flex-1 flex flex-col text-center before:content-[''] before:relative before:z-[1] before:block before:w-12 before:h-12 before:rounded-full before:mt-0 before:mb-4 before:mx-auto before:bg-primary-accent-color after:content-[''] after:relative after:top-[calc(var(--circle-size)_/_2)] after:w-[calc(100%_-_var(--circle-size)_-_calc(var(--spacing)_*_2))] after:left-[calc(50%_+_calc(var(--circle-size)_/_2_+_var(--spacing)))] after:h-0.5 after:bg-primary-border-color after:-order-1">
              <h3 className="font-bold text-base md:text-[4w] xl:text-xl mb-2">
                Step 2
              </h3>
              <p className="text-[0.85rem] md:2vw xl:text-base pl-[var(--spacing)] max-w-xs mx-auto">
                Realiza una transferencia bancaria a la siguiente{' '}
                <strong>Cuenta de Ahorros Bancolombia</strong>
                <Image
                  src="/images/bancolombia-logo.png"
                  alt="bancolombia-logo"
                  width={150}
                  height={150}
                  quality={100}
                  className="w-3 h-3 aspect-square inline-flex ml-2 mr-1"
                />
                <strong>236-000036-64</strong>
              </p>
            </li>
            <li className="flex-1 flex flex-col text-center before:content-[''] before:relative before:z-[1] before:block before:w-12 before:h-12 before:rounded-full before:mt-0 before:mb-4 before:mx-auto before:bg-primary-accent-color">
              <h3 className="font-bold text-base md:text-[4w] xl:text-xl mb-2">
                Step 3
              </h3>
              <p className="text-[0.85rem] md:2vw xl:text-base pl-[var(--spacing)] max-w-xs mx-auto">
                Envíanos una imagen de la transferencia al siguiente número
                <Image
                  src="/images/whatsapp.svg"
                  alt="whatsapp"
                  width={16}
                  height={16}
                  quality={100}
                  className="inline-flex object-cover ml-2 mr-1"
                />
                <strong>314-282-9044</strong>
              </p>
            </li>
          </ol>
        </div>
        {/* Gatito */}
        <div
          className={classnames(
            'absolute right-8 bottom-9 md:right-12 slide-in-active'
          )}
        >
          <Image
            src="/images/cat.gif"
            alt="ok-cute"
            width={433}
            height={469}
            quality={100}
            sizes="100vw"
            className="w-20 h-20"
          />
        </div>
        {/* Button Back */}
        <button
          className="flex items-center justify-center gap-2 absolute bottom-0 md:left-8 left-4 text-sm font-semibold px-[20px] py-[12px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s]"
          type="button"
        >
          <ArrowLongLeftIcon className="w-4 h-4 text-white animate-pulse" />
          {BACK_BUTTON_TITLE}
        </button>
        {/* Button Next */}
        <button
          className="flex items-center justify-center gap-2 absolute bottom-0 md:right-8 right-4 text-sm font-semibold px-[20px] py-[12px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s]"
          type="submit"
        >
          {NEXT_BUTTON_TITLE}
          <ArrowLongRightIcon className="w-4 h-4 text-white animate-pulse" />
        </button>
      </form>
    </section>
  )
}
