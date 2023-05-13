// import { GET_ALL_PRODUCTS } from '@/graphql/queries/getAllProducts'
import data from '@/utils/data'
import { formatCurrencyInCop } from '@/utils/price'
// import { useQuery } from '@apollo/client'
import { useFormatter } from 'next-intl'
import { useEffect, useState } from 'react'
// import { useMemo } from 'react'

// function useProductQuery(query, options = {}) {
//   const { loading, error, data } = useQuery(query, options)

//   const memoizedData = useMemo(() => data, [data])

//   return { data: memoizedData, loading, error }
// }

export default function useProducts() {
  // const { data, loading, error } = useProductQuery(GET_ALL_PRODUCTS)
  const [loading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const format = useFormatter()
  const error = null
  const formatCurrency = (amount) => formatCurrencyInCop(format, amount)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      setProducts(data.products)
    }, 5000)
  }, [])

  return { products, loading, error, formatCurrency }
}
