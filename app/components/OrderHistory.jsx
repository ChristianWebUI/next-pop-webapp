/* eslint-disable multiline-ternary */
'use client'

import {
  ORDER_HISTORY_TABLE_HEADERS,
  ORDER_HISTORY_TITLE
} from '@/constants/order'
import useOrderHistory from '@/hooks/useOrderHistory'
import { getErrorMessage } from '@/utils/error'
import Link from 'next/link'

export default function OrderHistory() {
  const { loading, error, orders, formatCurrency } = useOrderHistory()
  const { ID, DATE, TOTAL, PAID, DELIVERED, ACTION } =
    ORDER_HISTORY_TABLE_HEADERS
  return (
    <>
      <h1 className="mb-4 text-xl">{ORDER_HISTORY_TITLE}</h1>
      {loading && <div>Loading data...</div>}
      {error && <div className="alert-error">{getErrorMessage(error)}</div>}
      {orders && (
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th className="px-5 text-left">{ID}</th>
                <th className="p-5 text-left">{DATE}</th>
                <th className="p-5 text-left">{TOTAL}</th>
                <th className="p-5 text-left">{PAID}</th>
                <th className="p-5 text-left">{DELIVERED}</th>
                <th className="p-5 text-left">{ACTION}</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className=" p-5 ">{order._id.substring(20, 24)}</td>
                  <td className=" p-5 ">{order.createdAt.substring(0, 10)}</td>
                  <td className=" p-5 ">{formatCurrency(order.totalPrice)}</td>
                  <td className=" p-5 ">
                    {order.isPaid
                      ? `${order.paidAt.substring(0, 10)}`
                      : 'not paid'}
                  </td>
                  <td className=" p-5 ">
                    {order.isDelivered
                      ? `${order.deliveredAt.substring(0, 10)}`
                      : 'not delivered'}
                  </td>
                  <td className=" p-5 ">
                    <Link href={`/order/${order._id}`}>Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
