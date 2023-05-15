'use client'

import usePagination, { DOTS } from '@/hooks/usePagination'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon
} from '@heroicons/react/24/solid'
import classnames from 'classnames'

export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })
  if (currentPage === 0 || paginationRange?.length < 2) {
    return null
  }
  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange?.[paginationRange.length - 1]

  return (
    <ul
      id="pagination"
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <ArrowLongLeftIcon className="w-6 h-6" />
      </li>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index + 1} className="pagination-item dots">
              &#8230;
            </li>
          )
        }

        return (
          <li
            key={index + 1}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <ArrowLongRightIcon className="w-6 h-6 [&>path]:stroke-[2]" />
      </li>
    </ul>
  )
}
