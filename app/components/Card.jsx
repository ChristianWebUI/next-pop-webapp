import Image from 'next/image'
import Link from 'next/link'

export default function Card({
  name,
  image,
  slug,
  price,
  brand,
  onMouseEnter,
  onMouseLeave
}) {
  return (
    <Link href={`/product/${slug}`}>
      <div
        className="card rounded shadow transition-opacity duration-300 ease-in-out"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          sizes="100vw"
          className="w-full h-auto"
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
