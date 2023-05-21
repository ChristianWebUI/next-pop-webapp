import CartDetail from '@/components/CartDetail'
import PlaceOrderButton from '@/components/PlaceOrderButton'
import { ORDER_SUMMARY_TITLE } from '@/constants/checkout'
import { PAYMENT_METHODS } from '@/constants/payment'
import { PencilIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function OrderConfirmationForm() {
  return (
    <section
      id="order-confirmation-form"
      className="grid grid-cols-1 lg:grid-cols-4 md:gap-5 gap-10 m-3 p-[30px_10px] md:m-8 lg:px-20 lg:py-10 md:p-7"
    >
      <div className="lg:col-span-3 col-span-1 md:pl-20 md:py-12 md:pr-12 py-5 px-5 shadow-md">
        {/* Title of Page */}
        <h2 className="w-full md:mb-16 mb-4 text-left">
          You&apos;re almost there...!
        </h2>
        {/* Delivery Address Section */}
        <h5 className="">Delivery address</h5>
        <div className="flex justify-start flex-wrap gap-8 my-4">
          <div className="relative flex flex-col lg:w-[calc((100%_/_3)_-_2rem)] pl-5 pr-2.5 py-6 border border-solid rounded border-primary-accent-color after:absolute after:-right-2 after:h-5 after:w-5 after:bg-primary-accent-color after:rounded-full after:-top-2 after:content-checkmark after:text-center">
            <div className="w-full flex justify-between text-xl font-extrabold">
              Suki Sind{' '}
              <Link className="block text-xs text-gray-500" href="#">
                <PencilIcon className="h-3 w-3 inline-block mr-1" />
                Edit
              </Link>
            </div>
            <div className="flex flex-col gap-3 mt-3">
              <span className="w-full text-secondary-text-color text-sm">
                124.rd Cross. D S Croad, Kanakaspanura.
              </span>
              <span className="w-full text-secondary-text-color text-sm">
                Bangalore, Karnataka - 560078
              </span>
              <span className="w-full text-secondary-text-color text-sm">
                Mobile No. 08025908063
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:w-[174px] md:p-10 p-3 bg-gray-100 rounded text-gray-400 cursor-pointer">
            <PlusCircleIcon className="h-10 w-10" />
            <span className="text-[13px] text-gray-300">Add Address</span>
          </div>
        </div>
        {/* Payment Details Section */}
        <h5 className="mt-10">Payment Details</h5>
        <div className="flex justify-start my-4 md:gap-8 gap-1">
          <div className="relative flex items-center justify-center w-[calc(243px_*_0.75)] h-[calc(152px_*_0.75)] px-4 py-3 rounded-lg shadow-[0_1px_0_0_rgba(#fff,0.25)] overflow-hidden payment-card payment-card-white">
            <div className="w-[75%] m-auto">
              <Image
                src={PAYMENT_METHODS[3].icon}
                alt="payment-method-icon"
                width={200}
                height={100}
                quality={100}
                priority
                className="w-full"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center w-[calc(152px_*_0.75)] h-[calc(152px_*_0.75)] bg-gray-100 rounded text-gray-400 cursor-pointer">
            <PencilIcon className="h-5 w-5" />
            <span>Edit</span>
          </div>
        </div>
        <h5 className="mt-10">Order Summary</h5>
        <CartDetail hasSectionP1={false} otherClasses="mt-4" />
      </div>
      <div className="md:col-span-1 self-start p-3 shadow-md border-t-8 border-solid border-primary-accent-color">
        <p className="font-bold text-lg m-0 text-primary-text-color">
          {ORDER_SUMMARY_TITLE}
        </p>
        <ul className="w-full border-t border-solid border-input-border-color mt-3 text-sm">
          <li className="flex justify-between items-center px-0 py-2">
            <span>Price</span>
            <span className="text-base">$ 49.000</span>
          </li>
          <li className="flex justify-between items-center px-0 py-2">
            <span>Delivery charges</span>
            <span className="text-[#79d1a7]">Free</span>
          </li>
          <li className="flex justify-between items-center px-0 py-2">
            <span>Discount price</span>
            <span>$0</span>
          </li>
          <li className="flex justify-between items-center px-0 py-3 border-t border-dashed border-input-border-color">
            <span className="flex flex-col items-center justify-center text-lg">
              Total Amount{' '}
              <span className="text-red-500 text-xs">(Incl GST)</span>
            </span>
            <span className="text-lg">$ 49.000</span>
          </li>
          <li className="flex justify-between p-2 alert-success">
            <span className="text-xs w-48">
              Your total Savings amount on this order
            </span>
            <span className="text-lg">$ 10.000</span>
          </li>
          <li className="mt-5">
            <PlaceOrderButton />
          </li>
        </ul>
      </div>
    </section>
  )
}
