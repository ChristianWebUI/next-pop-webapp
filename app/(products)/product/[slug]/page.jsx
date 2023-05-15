import FeaturedProducts from '@/components/FeaturedProducts'
import Newsletter from '@/components/Newsletter'
import ProductDetail from '@/components/ProductDetail'
import data from '@/utils/data'

const getSingleProduct = (slug) => {
  return data.products.find((product) => product.slug === slug)
}

export function generateMetadata({ params }) {
  const product = getSingleProduct(params.slug)
  return {
    title: product.name
  }
}

export default function ProductDetailPage({ params }) {
  const product = getSingleProduct(params.slug)
  return (
    <>
      <ProductDetail product={product} />
      <FeaturedProducts numberOfProducts={4} />
      <Newsletter />
    </>
  )
}
