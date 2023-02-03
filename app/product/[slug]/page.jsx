import data from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetail({ params }) {
  const { slug } = params
  const product = data.products.find((prod) => prod.slug === slug)

  if (!product) {
    return <div>Product Not Found</div>
  }

  return (
    <>
      <div className="py-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2 relative w-full h-[640px]">
          <Image src={product.image} alt={product.name} fill quality={100} />
        </div>
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
            <button className="primary-button w-full">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}
