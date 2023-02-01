import Image from 'next/image'
import Link from 'next/link'

export default function ProductItem({ name, image, slug, price, brand }) {
  return (
    <div className="card">
      <Link href={`/product/${slug}`}>
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          sizes="100vw"
          className="rounded shadow w-full h-auto"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${slug}`}>
          <h2 className="text-lg">{name}</h2>
        </Link>
        <p className="mb-2">{brand}</p>
        <p>${price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  )
}
