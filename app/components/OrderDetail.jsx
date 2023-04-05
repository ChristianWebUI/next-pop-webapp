'use client'
import CartOverviewTable from '@/components/CartOverviewTable'
import {
  ITEMS_TITLE,
  ORDER_ITEMS_TITLE,
  ORDER_SUMMARY_TITLE,
  PAYMENT_METHOD_TITLE,
  SHIPPING_ADDRESS_TITLE,
  SHIPPING_TITLE,
  TAX_TITLE,
  TOTAL_TITLE
} from '@/constants/checkout'
import {
  DELIVERED_AT,
  NOT_DELIVERED,
  NOT_PAID,
  ORDER,
  PAID_AT
} from '@/constants/order'
import useOrderView from '@/hooks/useOrderView'

export default function OrderDetail({ orderId }) {
  const { loading, error, order } = useOrderView({ orderId })
  const {
    deliveredAt,
    isDelivered,
    isPaid,
    itemsPrice,
    orderItems,
    orderNumber,
    paidAt,
    paymentMethod,
    shippingAddress,
    shippingPrice,
    taxPrice,
    totalPrice
  } = order || {}
  return (
    <>
      <h1 className="mb-4 text-xl">
        {orderNumber ? `Order ${orderNumber}` : 'Order not found'}
      </h1>
      {loading && <div>Loading...</div>}
      {error && <div className="alert-error">{error}</div>}
      {order && (
        <div className="grid md:grid-cols-4 md:gap-5s">
          <div className="overflow-x-auto md:col-span-3">
            <div className="card p-5">
              <h2 className="mb-2 text-lg">{SHIPPING_ADDRESS_TITLE}</h2>
              <div>{Object.values(shippingAddress).join(', ')}</div>
              {isDelivered ? (
                <div className="alert-success">{`${DELIVERED_AT} ${deliveredAt}`}</div>
              ) : (
                <div className="alert-error">{NOT_DELIVERED}</div>
              )}
            </div>
            <div className="card p-5">
              <h2 className="mb-2 text-lg">{PAYMENT_METHOD_TITLE}</h2>
              <div>{paymentMethod}</div>
              {isPaid ? (
                <div className="alert-success">{`${PAID_AT} ${paidAt}`}</div>
              ) : (
                <div className="alert-error">{NOT_PAID}</div>
              )}
            </div>
            <div className="card overflow-x-auto p-5">
              <h2 className="mb-2 text-lg">{ORDER_ITEMS_TITLE}</h2>
              <CartOverviewTable cartItems={orderItems} context={ORDER} />
            </div>
          </div>
          <div>
            <div className="card  p-5">
              <h2 className="mb-2 text-lg">{ORDER_SUMMARY_TITLE}</h2>
              <ul>
                <li>
                  <div className=" mb-2 flex justify-between">
                    <div>{ITEMS_TITLE}</div>
                    <div>${itemsPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=" mb-2 flex justify-between">
                    <div>{TAX_TITLE}</div>
                    <div>${taxPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=" mb-2 flex justify-between">
                    <div>{SHIPPING_TITLE}</div>
                    <div>${shippingPrice}</div>
                  </div>
                </li>
                <li>
                  <div className=" mb-2 flex justify-between">
                    <div>{TOTAL_TITLE}</div>
                    <div>${totalPrice}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
