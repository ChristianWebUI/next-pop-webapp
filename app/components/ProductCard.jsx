import AddToCartButton from '@/components/AddToCartButton'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({
  name,
  _id,
  image,
  imageOnHover,
  slug,
  price,
  brand,
  countInStock
}) {
  const product = {
    name,
    _id,
    image,
    imageOnHover,
    slug,
    price,
    brand,
    countInStock
  }
  return (
    <div className="card">
      <Link href={`/product/${slug}`}>
        <Image
          src={image}
          alt={`${name}-${brand}`}
          width={200}
          height={200}
          quality={100}
          priority
          className="w-full rounded shadow transition duration-500 ease-in-out transform hover:scale-105"
        />
        <Image
          src={imageOnHover}
          alt={`${name}-${brand}-on hover`}
          width={200}
          height={200}
          quality={100}
          priority
          className="w-full rounded shadow absolute top-0 left-0 opacity-0 transition duration-500 ease-in-out transform hover:opacity-100"
        />
      </Link>
      <div className="p-5 text-center">
        <Link href={`/product/${slug}`}>
          <h2 className="text-lg">{name}</h2>
        </Link>
        <p className="mb-2">{brand}</p>
        <p>${price}</p>
        <AddToCartButton product={product} fromProductCard />
      </div>
    </div>
  )
}
