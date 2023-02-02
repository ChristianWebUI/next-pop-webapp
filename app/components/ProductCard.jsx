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
      <div className="card rounded shadow relative">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          sizes="100vw"
          className="w-full rounded transition duration-500 ease-in-out transform hover:scale-105"
        />
        <Image
          src={imageOnHover}
          alt={name}
          width={200}
          height={200}
          sizes="100vw"
          className="w-full rounded absolute top-0 left-0 opacity-0 transition duration-500 ease-in-out transform hover:opacity-100"
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
