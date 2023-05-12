'use client'
import ProductCardLegacy from '@/components/ProductCardLegacy'
import useProducts from '@/hooks/useProducts'

export default function Products() {
  const { products, loading, formatCurrency } = useProducts()
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <>Loading products...</>
      ) : (
        products.map((product) => (
          <ProductCardLegacy
            {...product}
            key={product.slug}
            formatCurrency={formatCurrency}
          />
        ))
      )}
    </div>
  )
}
