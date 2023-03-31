'use client'
import ProductCard from '@/components/ProductCard'
import { GET_ALL_PRODUCTS } from '@/graphql/queries/getAllProducts'
import { useQuery } from '@apollo/client'
import { useMemo } from 'react'

function useProductQuery(query, options = {}) {
  const { loading, error, data } = useQuery(query, options)

  const memoizedData = useMemo(() => data, [data])

  return { data: memoizedData, loading, error }
}

export default function Products() {
  const { data, loading } = useProductQuery(GET_ALL_PRODUCTS)
  const products = data?.getAllProducts
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <>Loading products...</>
      ) : (
        products.map((product) => (
          <ProductCard {...product} key={product.slug} />
        ))
      )}
    </div>
  )
}
