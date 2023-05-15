'use client'
import {
  FEATURED_PRODUCTS_PARAGRAPH,
  FEATURED_PRODUCTS_TITLE
} from '@/constants/home'
import useFeaturedProducts from '@/hooks/useFeaturedProducts'
import ProductCard from './ProductCard'

export default function FeaturedProducts({ numberOfProducts = 8 }) {
  const { featuredProducts, loading, error, formatCurrency } =
    useFeaturedProducts(numberOfProducts)
  return (
    <section id="featured-products" className="section-p1 text-center">
      <h2>{FEATURED_PRODUCTS_TITLE}</h2>
      <p>{FEATURED_PRODUCTS_PARAGRAPH}</p>
      <div
        id="products-container"
        className="flex justify-start gap-x-9 flex-wrap pt-5"
      >
        {loading && <>Loading Featured Products ...</>}
        {error && <>Error on featured products</>}
        {featuredProducts &&
          featuredProducts.map((featuredProduct, index) => (
            <ProductCard
              key={`${featuredProduct.slug}${index}`}
              product={featuredProduct}
              formatCurrency={formatCurrency}
            />
          ))}
      </div>
    </section>
  )
}
