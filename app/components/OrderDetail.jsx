import BotonBancolombia from '@/components/BotonBancolombia'
import Price from '@/components/Price'
import { PAYMENT_STATUS } from '@/constants/order'
import data from '@/utils/data'
import {
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import {
  CreditCardIcon,
  MapPinIcon,
  PrinterIcon,
  TruckIcon
} from '@heroicons/react/24/solid'
import classnames from 'classnames'
import Image from 'next/image'

export default function OrderDetail({ orderId }) {
  const { PAID, NOT_PAID, WARNING, INFO } = PAYMENT_STATUS
  const currentPaymentStatus = 'NOT_PAID'
  return (
    <section id="order-detail" className="section-p1">
      {/* Header */}
      <h1 className="flex justify-center items-center mt-5 gap-5">
        <Image
          src="/logos/no-text-lightpink-bg.webp"
          alt="Logo P de Papel No Text"
          width={4000}
          height={4000}
          quality={100}
          className="w-16 h-16 rounded-full"
        />
        Thank You!
      </h1>
      {/* Order Placed Message */}
      <h3 className="md:flex md:justify-center md:items-center md:text-4xl text-3xl mt-8 inline-block text-center">
        Your order{' '}
        <strong className="md:mx-2 mx-1 md:text-xl text-sm inline-block md:block">{`#${orderId}`}</strong>
        has been placed!
      </h3>
      {/* Email Sent Message */}
      <p className="text-center md:text-base text-sm">
        We sent an email to <strong>john.doe@gmail.com</strong> with your order
        confirmation and receipt. If the email has not arrived within two
        minutes, please check your spam folder to see if the email was routed
        there.
      </p>
      {/* Time Placed and Print Messages */}
      <p className="flex md:justify-center md:items-center md:gap-1 text-sm md:text-base justify-between items-start">
        <ClockIcon className="w-5 h-5 text-primary-accent-color" />{' '}
        <span>Time Placed: 22/05/2023 13:35 CEST</span>
        <PrinterIcon className="w-5 h-5 text-primary-accent-color ml-4" />{' '}
        <span className="underline">Print</span>
      </p>
      {/* Shipping, Deliver and Payment */}
      <div className="grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-0 border border-solid border-input-border-color mb-10">
        {/* Shipping Section */}
        <div className="flex lg:p-14 p-7 md:border-r border-b md:border-b-0 border-solid border-input-border-color">
          <div className="flex flex-col flex-1 text-xs leading-5">
            <MapPinIcon className="w-8 h-8 text-primary-accent-color" />
            <div className="text-base mb-4">Shipping</div>
            <span>John Newman</span>
            <span>Calle 12 AA Sur #55D - 30</span>
            <span>Medellin, AN 94203</span>
            <span>CO</span>
            <span>+17687654332</span>
          </div>
        </div>
        {/* Delivery Status Section */}
        <div className="flex lg:p-14 p-7 md:border-r border-b md:border-b-0 border-solid border-input-border-color">
          <div className="flex flex-col text-xs leading-5">
            <TruckIcon className="w-8 h-8 text-primary-accent-color" />
            <div className="text-base mb-4">Delivery Status</div>
            <div className="flex flex-col">
              <div className="order-track-step flex h-[4.375rem]">
                <div className="order-track-status mr-2 relative">
                  <span className="order-track-status-dot block w-4 h-4 rounded-full bg-primary-accent-color"></span>
                  <span className="order-track-status-line block my-0 mx-auto w-[2px] h-[4.375rem] bg-primary-accent-color"></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat text-sm font-medium mb-[3px] mt-0">
                    Order Received
                  </p>
                  <span className="order-track-text-sub text-xs font-light">
                    22st May, 2023
                  </span>
                </div>
              </div>
              <div className="order-track-step flex h-[4.375rem]">
                <div className="order-track-status mr-2 relative">
                  <span className="order-track-status-dot block w-4 h-4 rounded-full bg-primary-accent-color"></span>
                  <span className="order-track-status-line block my-0 mx-auto w-[2px] h-[4.375rem] bg-primary-accent-color"></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat text-sm font-medium mb-[3px] mt-0">
                    Order Processed
                  </p>
                  <span className="order-track-text-sub text-xs font-light">
                    22st May, 2023
                  </span>
                </div>
              </div>
              <div className="order-track-step flex h-[4.375rem]">
                <div className="order-track-status mr-2 relative">
                  <span className="order-track-status-dot block w-4 h-4 rounded-full bg-primary-accent-color"></span>
                  <span className="order-track-status-line block my-0 mx-auto w-[2px] h-[4.375rem] bg-primary-accent-color"></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat text-sm font-medium mb-[3px] mt-0">
                    Order Dispatched
                  </p>
                  <span className="order-track-text-sub text-xs font-light">
                    22st May, 2023
                  </span>
                </div>
              </div>
              <div className="order-track-step flex h-[4.375rem]">
                <div className="order-track-status mr-2 relative">
                  <span className="order-track-status-dot block w-4 h-4 rounded-full bg-primary-accent-color"></span>
                  <span className="order-track-status-line block my-0 mx-auto w-[2px] h-[4.375rem] bg-primary-accent-color"></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat text-sm font-medium mb-[3px] mt-0">
                    Order In Transit
                  </p>
                  <span className="order-track-text-sub text-xs font-light">
                    22st May, 2023
                  </span>
                </div>
              </div>
              <div className="order-track-step flex h-[2.5rem]">
                <div className="order-track-status mr-2 relative">
                  <span className="order-track-status-dot block w-4 h-4 rounded-full bg-primary-accent-color"></span>
                  <span className="order-track-status-line my-0 mx-auto w-[2px] h-[4.375rem] bg-primary-accent-color hidden"></span>
                </div>
                <div className="order-track-text">
                  <p className="order-track-text-stat text-sm font-medium mb-[3px] mt-0">
                    Order Delivered
                  </p>
                  <span className="order-track-text-sub text-xs font-light">
                    22st May, 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Payment Status Section */}
        <div className="flex lg:p-14 p-7">
          <div className="flex flex-col text-xs leading-5 w-full">
            <CreditCardIcon className="w-8 h-8 text-primary-accent-color" />
            <div className="text-base mb-4">Payment Status</div>
            <div className="flex flex-col gap-8 w-full">
              <div
                className={classnames(
                  'p-5 border border-l-[9px] border-solid opacity-[0.83] transition-opacity duration-[0.6s] rounded-md text-sm flex lg:flex-row flex-col justify-center items-start',
                  {
                    'bg-error-message-bg-color border-error-message-text-color text-error-message-text-color':
                      currentPaymentStatus === NOT_PAID
                  },
                  {
                    'bg-success-message-bg-color border-success-message-text-color text-success-message-text-color':
                      currentPaymentStatus === PAID
                  },
                  {
                    'bg-warning-message-bg-color border-warning-message-text-color text-warning-message-text-color':
                      currentPaymentStatus === WARNING
                  },
                  {
                    'bg-info-message-bg-color border-info-message-text-color text-info-message-text-color':
                      currentPaymentStatus === INFO
                  }
                )}
              >
                {currentPaymentStatus === PAID && (
                  <>
                    <CheckCircleIcon className="w-5 h-5 mr-1" />
                    <span>
                      We have received your payment for the order. Enjoy your
                      purchase!
                    </span>
                  </>
                )}
                {currentPaymentStatus === NOT_PAID && (
                  <>
                    <ExclamationTriangleIcon className="w-5 h-5 mr-1" />
                    <span>
                      Your order is awaiting payment. Please make the necessary
                      payment to continue.
                    </span>
                  </>
                )}
                {currentPaymentStatus === WARNING && (
                  <>
                    <ExclamationTriangleIcon className="w-5 h-5 mr-1" />
                    <span>
                      Kindly make the payment as soon as possible to avoid any
                      delays in processing your order.
                    </span>
                  </>
                )}
                {currentPaymentStatus === INFO && (
                  <>
                    <ExclamationCircleIcon className="w-5 h-5 mr-1" />
                    <span>
                      We are currently processing your payment. Please wait
                      while we verify the transaction.
                    </span>
                  </>
                )}
              </div>
              <BotonBancolombia />
            </div>
          </div>
        </div>
      </div>
      {/* Order Items and Order Summary */}
      <div className="grid md:grid-cols-4 grid-cols-1 lg:gap-8 md:gap-3 gap-8">
        {/* Order Items */}
        <div className="lg:col-span-3 md:col-span-2 lg:pr-20">
          <div className="text-xl pb-5 border-b border-solid border-input-border-color">
            Order List
          </div>
          <div className="max-h-[15.188rem] overflow-y-auto w-full">
            {data.products
              .map(({ slug, image, name, price }) => (
                <div
                  key={slug}
                  className="flex w-full justify-between items-start py-4 pl-0 pr-3"
                >
                  <div className="flex lg:gap-8 gap-2 justify-start items-start">
                    <Image
                      src={image}
                      alt={name}
                      width={80}
                      height={80}
                      sizes="80px"
                      quality={100}
                      className=""
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-sm text-primary-text-color mt-0 mb-2">
                        {name}
                      </p>
                      <span className="font-thin text-xs text-secondary-text-color">
                        {'#412358252305 | Qty:3'}
                      </span>
                    </div>
                  </div>

                  <span className="lg:text-lg text-base">
                    <Price price={price} />
                  </span>
                </div>
              ))
              .slice(0, 3)}
          </div>
        </div>
        {/* Order Summary */}
        <div className="lg:col-start-4 md:col-span-2 border border-solid border-input-border-color p-4">
          <div className="text-xl pb-4 border-b border-solid border-input-border-color">
            Order Summary
          </div>
          <div className="flex flex-col w-full px-0 py-6 border-b border-solid border-input-border-color">
            <div className="flex justify-between w-full">
              <span>Subtotal:</span>
              <span>
                <Price price={18500} />
              </span>
            </div>
            <div className="flex justify-between w-full">
              <span>Shipping & Handling:</span>
              <span>
                <Price price={8500} />
              </span>
            </div>
            <div className="flex justify-between w-full">
              <span>Est Sales Tax:</span>
              <span>
                <Price price={0} />
              </span>
            </div>
          </div>
          <div className="flex w-full px-0 py-8 text-xl">
            <div className="flex justify-between w-full">
              <span>Total</span>
              <span>
                <Price price={27000} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
