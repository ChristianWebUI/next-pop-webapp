'use client'
import CartOverviewTable from '@/components/CartOverviewTable'
import {
  CART_PAGE,
  HOME_PAGE,
  ITEMS_TITLE,
  ORDER_ITEMS_TITLE,
  ORDER_SUMMARY_TITLE,
  PAYMENT_METHOD_PAGE,
  PAYMENT_METHOD_TITLE,
  PLACE_ORDER_TITLE,
  SHIPPING_ADDRESS_PAGE,
  SHIPPING_ADDRESS_TITLE,
  SHIPPING_TITLE,
  TAX_TITLE,
  TOTAL_TITLE
} from '@/constants/checkout'
import { ORDER } from '@/constants/order'
import { getPaymentIcon } from '@/constants/payment'
import useOrderForm from '@/hooks/useOrderForm'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function OrderConfirmationForm() {
  const [mounted, setMounted] = useState(false)
  const {
    shippingInfo,
    paymentMethod,
    cartItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    loading,
    formatCurrency,
    placeOrderHandler
  } = useOrderForm()
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    mounted && (
      <>
        <h1 className="mb-4 text-xl">{PLACE_ORDER_TITLE}</h1>
        {cartItems === 0 ? (
          <div>
            Cart is empty.{' '}
            <Link className="text-blue-700" href={HOME_PAGE}>
              Go shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 md:gap-5">
            <div className="overflow-x-auto md:col-span-3">
              <div className="card p-5">
                <h2 className="mb-2 text-lg">{SHIPPING_ADDRESS_TITLE}</h2>
                <div>
                  {shippingInfo?.fullName}, {shippingInfo?.cellPhone},{' '}
                  {shippingInfo?.address}, {shippingInfo?.department},{' '}
                  {shippingInfo?.cityName}, {shippingInfo?.country.name}
                  <div className="flex w-full gap-1 mb-2">
                    <Image
                      src={shippingInfo.deliveryData.image}
                      alt={`${shippingInfo.deliveryData.companyName}`}
                      width={25}
                      height={25}
                      quality={100}
                      priority
                      className="top-0 left-0 object-scale-down rounded-md"
                    />{' '}
                    {shippingInfo.deliveryData.companyName}
                  </div>
                </div>
                <Link className="text-blue-700" href={SHIPPING_ADDRESS_PAGE}>
                  Edit
                </Link>
              </div>
              <div className="card p-5">
                <h2 className="mb-2 text-lg">{PAYMENT_METHOD_TITLE}</h2>
                <div className="flex gap-2">
                  <Image
                    src={getPaymentIcon(paymentMethod)}
                    alt={`Payment ${paymentMethod}`}
                    width={60}
                    height={60}
                    quality={100}
                    priority
                    className="w-24 h-24 top-0 left-0 object-scale-down"
                  />
                </div>
                <Link className="text-blue-700" href={PAYMENT_METHOD_PAGE}>
                  Edit
                </Link>
              </div>
              <div className="card overflow-x-auto p-5">
                <h2 className="mb-2 text-lg">{ORDER_ITEMS_TITLE}</h2>
                <CartOverviewTable cartItems={cartItems} context={ORDER} />
                <Link className="text-blue-700" href={CART_PAGE}>
                  Edit
                </Link>
              </div>
            </div>
            <div>
              <div className="card p-5">
                <h2 className="mb-2 text-lg">{ORDER_SUMMARY_TITLE}</h2>
                <ul>
                  <li>
                    <div className=" mb-2 flex justify-between">
                      <div>{ITEMS_TITLE}</div>
                      <div>{formatCurrency(itemsPrice)}</div>
                    </div>
                  </li>
                  <li>
                    <div className=" mb-2 flex justify-between">
                      <div>{TAX_TITLE}</div>
                      <div>{formatCurrency(taxPrice)}</div>
                    </div>
                  </li>
                  <li>
                    <div className=" mb-2 flex justify-between">
                      <div>{SHIPPING_TITLE}</div>
                      <div>{formatCurrency(shippingPrice)}</div>
                    </div>
                  </li>
                  <li>
                    <div className=" mb-2 flex justify-between">
                      <div>{TOTAL_TITLE}</div>
                      <div>{formatCurrency(totalPrice)}</div>
                    </div>
                  </li>
                  <li>
                    <button
                      disabled={Boolean(loading)}
                      onClick={placeOrderHandler}
                      className="primary-button w-full"
                    >
                      {loading ? 'Sending data...' : PLACE_ORDER_TITLE}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    )
  )
}
