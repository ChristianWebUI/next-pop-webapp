import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({
  name,
  image,
  imageOnHover,
  slug,
  price,
  brand
}) {
  return (
    <Link href={`/product/${slug}`}>
      <div className="card">
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
        <div className="p-5 text-center">
          <h2 className="text-lg">{name}</h2>
          <p className="mb-2">{brand}</p>
          <p>${price}</p>
          <button className="primary-button" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  )
}
