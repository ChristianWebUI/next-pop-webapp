import AddToCartButton from '@/components/AddToCartButton'
import ImagesCarousel from '@/components/ImagesCarousel'
import getClient from '@/graphql/apollo-client'
import { GET_PRODUCT_BY_SLUG } from '@/graphql/queries/getProductBySlug'
import Link from 'next/link'

async function getProduct(slug) {
  const client = getClient()
  const { data, loading, error } = await client.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug }
  })
  return { data, loading, error }
}

export async function generateMetadata({ params }) {
  const { slug } = params
  const { data } = await getProduct(slug)
  return { title: data?.getProductBySlug?.name || 'Not Found' }
}

export default async function ProductDetail({ params }) {
  const { slug } = params
  const { data, loading, error } = await getProduct(slug)
  const product = data?.getProductBySlug
  if (loading) {
    return <>Loading product...</>
  }

  if (!product || error) {
    return <div>Product Not Found</div>
  }

  return (
    <section className="p-10">
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-3">
        <ImagesCarousel images={product.images} name={product.name} />
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReview} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</div>
            </div>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </section>
  )
}
