'use client'
import Pagination from '@/components/Pagination'
import Price from '@/components/Price'
import {
  ORDER_HISTORY_TABLE_HEADINGS,
  ORDER_HISTORY_TABLE_PAGESIZE
} from '@/constants/order'
import data from '@/utils/data'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import classnames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

const paidPill = (paidAt, isPaid) => {
  return isPaid ? (
    <span className="py-1 px-3 bg-success-message-bg-color text-success-message-text-color border border-solid border-success-message-text-color rounded-3xl">
      {paidAt?.$date?.substring(0, 10)}
    </span>
  ) : (
    notPaidPill()
  )
}
const notPaidPill = () => (
  <span className="py-1 px-3 bg-error-message-bg-color text-error-message-text-color border border-solid border-error-message-text-color rounded-3xl">
    Not Paid
  </span>
)
const deliveryPill = (deliveredAt, isDelivered) => {
  return isDelivered ? (
    <span className="py-1 px-3 bg-success-message-bg-color text-success-message-text-color border border-solid border-success-message-text-color rounded-3xl">
      {deliveredAt?.$date?.substring(0, 10)}
    </span>
  ) : (
    noDeliveredPill()
  )
}
const noDeliveredPill = () => (
  <span className="py-1 px-3 bg-error-message-bg-color text-error-message-text-color border border-solid border-error-message-text-color rounded-3xl">
    Not Delivered
  </span>
)

export default function OrderHistory() {
  const [currentPage, setCurrentPage] = useState(1)
  const firstPageIndex = (currentPage - 1) * ORDER_HISTORY_TABLE_PAGESIZE
  const lastPageIndex = firstPageIndex + ORDER_HISTORY_TABLE_PAGESIZE
  const currentOrders = data.orders.slice(firstPageIndex, lastPageIndex)
  return (
    <>
      <section
        id="order-history"
        className="section-p1 overflow-x-auto lg:overflow-visible"
      >
        {/* Order History Table */}
        <table className="w-full border-collapse table-fixed whitespace-nowrap">
          <thead className="border border-solid border-table-header-color border-x-0">
            <tr>
              {ORDER_HISTORY_TABLE_HEADINGS.map((label, index) => (
                <th
                  key={`${label}-i${index}`}
                  className={classnames(
                    'text-center font-bold uppercase text-sm px-0 py-[18px]',
                    { 'w-20': [1, 7].includes(index + 1) },
                    { 'w-[9.875rem]': [2, 3, 4, 5, 6].includes(index + 1) }
                  )}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentOrders.map(
              (
                {
                  _id,
                  createdAt: { $date },
                  totalPrice,
                  isPaid,
                  paidAt,
                  isDelivered,
                  deliveredAt = {}
                },
                index
              ) => {
                return (
                  <tr key={`${_id.$oid}-${index + 100}`}>
                    {/* ID */}
                    <td className="text-center w-20 pt-[15px] text-sm">{`#${_id.$oid.substring(
                      20,
                      24
                    )}`}</td>
                    {/* Date Created */}
                    <td className="text-center w-[9.875rem] pt-[15px] text-sm">
                      {$date.substring(0, 10)}
                    </td>
                    {/* Total */}
                    <td className="text-center w-[9.875rem] pt-[15px] text-sm">
                      <Price price={totalPrice} />
                    </td>
                    {/* Status */}
                    <td className="text-center w-[9.875rem] pt-[15px] text-sm">
                      <span className="py-1 px-3 bg-info-message-bg-color text-info-message-text-color border border-solid border-info-message-text-color rounded-3xl">
                        Lorem Ipsum
                      </span>
                    </td>
                    {/* Paid */}
                    <td className="text-center w-[9.875rem] pt-[15px] text-sm">
                      {paidPill(paidAt, isPaid)}
                    </td>
                    {/* Delivered */}
                    <td className="text-center w-[9.875rem] pt-[15px] text-sm">
                      {deliveryPill(deliveredAt, isDelivered)}
                    </td>
                    {/* View Details */}
                    <td className="w-full flex justify-center items-center pt-[15px] text-sm">
                      <Link className="group" href={`/order/${_id.$oid}`}>
                        <ArrowTopRightOnSquareIcon className="h-5 w-5 text-primary-accent-color group-hover:scale-125" />
                      </Link>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </section>
      {/* Pagination */}
      <Pagination
        className="w-full flex justify-center mt-16"
        currentPage={currentPage}
        totalCount={data.orders.length}
        pageSize={ORDER_HISTORY_TABLE_PAGESIZE}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  )
}
