import data from '@/utils/data'
import { formatCurrencyInCop } from '@/utils/price'
import { useFormatter } from 'next-intl'

export default function useNewArrivals(numberOfProducts) {
  const format = useFormatter()
  const newArrivals = data.products.slice(0, numberOfProducts)
  const loading = false
  const error = null
  const formatCurrency = (amount) => formatCurrencyInCop(format, amount)
  return { newArrivals, loading, error, formatCurrency }
}
