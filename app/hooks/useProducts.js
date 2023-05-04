import { GET_ALL_PRODUCTS } from '@/graphql/queries/getAllProducts'
import { formatCurrencyInCop } from '@/utils/price'
import { useQuery } from '@apollo/client'
import { useFormatter } from 'next-intl'
import { useMemo } from 'react'

function useProductQuery(query, options = {}) {
  const { loading, error, data } = useQuery(query, options)

  const memoizedData = useMemo(() => data, [data])

  return { data: memoizedData, loading, error }
}

export default function useProducts() {
  const { data, loading, error } = useProductQuery(GET_ALL_PRODUCTS)
  const format = useFormatter()
  const formatCurrency = (amount) => formatCurrencyInCop(format, amount)

  return { products: data?.getAllProducts, loading, error, formatCurrency }
}
