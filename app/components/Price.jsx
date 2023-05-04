'use client'
import { formatCurrencyInCop } from '@/utils/price'
import { useFormatter } from 'next-intl'

const Price = ({ price, asComponent = false }) => {
  const format = useFormatter()
  const formattedPrice = formatCurrencyInCop(format, price)
  return asComponent ? <div>{formattedPrice}</div> : formattedPrice
}

export default Price
