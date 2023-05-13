'use client'

import Pagination from '@/components/Pagination'
import ProductCard from '@/components/ProductCard'
import RainbowLoader from '@/components/RainbowLoader'
import { PAGESIZE } from '@/constants/shop'
import useProducts from '@/hooks/useProducts'
import { useState } from 'react'

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1)
  const { products, loading, error, formatCurrency } = useProducts()

  const firstPageIndex = (currentPage - 1) * PAGESIZE
  const lastPageIndex = firstPageIndex + PAGESIZE

  const currentProducts = products.slice(firstPageIndex, lastPageIndex)

  return (
    <section id="all-products" className="section-p1 text-center">
      <div
        id="all-products-container"
        className="flex justify-start gap-x-9 flex-wrap pt-5"
      >
        {loading && <RainbowLoader />}
        {error && <>Error loading all products</>}
        {currentProducts &&
          currentProducts.map((product, index) => (
            <ProductCard
              key={`${product.slug}${index}`}
              product={product}
              formatCurrency={formatCurrency}
            />
          ))}
      </div>
      <Pagination
        className="w-full flex justify-center mt-16"
        currentPage={currentPage}
        totalCount={products.length}
        pageSize={PAGESIZE}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  )
}
