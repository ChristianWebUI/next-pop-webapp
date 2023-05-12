import AddToCartButton from '@/components/AddToCartButton'
import StarRating from '@/components/StarRating'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({
  product: { name, _id, image, imageOnHover, slug, price, brand, countInStock },
  formatCurrency
}) {
  return (
    <div className="w-product-card min-w-250 py-2.5 px-3 border border-solid border-primary-border-color rounded-3xl shadow-product-card mx-0 my-[15px] hover:shadow-product-card-hover product-card-transition relative">
      <Link href={`/product/${slug}`}>
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          quality={100}
          priority
          className="w-full rounded-[20px]"
        />
      </Link>
      <div className="text-start px-0 py-2.5">
        <span className="text-brand-text-color text-xs">{brand}</span>
        <Link href={`/product/${slug}`}>
          <h5 className="text-primary-link-color text-sm">{name}</h5>
        </Link>
        <StarRating />
        <h4 className="font-inder text-lg font-bold text-primary-accent-color">
          {formatCurrency(price)}
        </h4>
      </div>
      <AddToCartButton />
    </div>
  )
}
