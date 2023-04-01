import { GET_ALL_PRODUCTS } from '@/graphql/queries/getAllProducts'
import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

function useProductQuery(query, options = {}) {
  const { loading, error, data } = useQuery(query, options)

  const memoizedData = useMemo(() => data, [data])

  return { data: memoizedData, loading, error }
}

export default function useProducts() {
  const { data, loading, error } = useProductQuery(GET_ALL_PRODUCTS)

  return { products: data?.getAllProducts, loading, error }
}
