'use client'
import { formatCurrencyInCop } from '@/utils/price'
import classnames from 'classnames'
import { useFormatter } from 'next-intl'

const Price = ({ price, tagName = '', classNames = '' }) => {
  const format = useFormatter()
  const Tag = tagName || undefined
  const formattedPrice = formatCurrencyInCop(format, price)
  return Tag ? (
    <Tag className={classnames('', { [classNames]: classNames })}>
      {formattedPrice}
    </Tag>
  ) : (
    formattedPrice
  )
}

export default Price
