import data from '@/utils/data'
import { formatCurrencyInCop } from '@/utils/price'
import { useFormatter } from 'next-intl'

export default function useFeaturedProducts(numberOfProducts) {
  const format = useFormatter()
  const featuredProducts = data.products.slice(0, numberOfProducts)
  const loading = false
  const error = null
  const formatCurrency = (amount) => formatCurrencyInCop(format, amount)
  return { featuredProducts, loading, error, formatCurrency }
}
