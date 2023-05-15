import AddToCartButton from '@/components/AddToCartButton'
import ImagesCarousel from '@/components/ImagesCarousel'
import Price from '@/components/Price'
import ProductSelector from '@/components/ProductSelector'
import QuantitySelector from '@/components/QuantitySelector'
import StarRating from '@/components/StarRating'
import { PRODUCT_DETAILS_TITLE } from '@/constants/productDetail'

export default function ProductDetail({ product }) {
  const { images, category, name, price, description, countInStock } = product
  const dummyOptions = images.map((img) => ({
    value: img.split('/').pop().substring(0, img.lastIndexOf('.')),
    label: img.split('/').pop().substring(0, img.lastIndexOf('.')),
    imageUrl: img
  }))
  return (
    <section id="product-detail" className="section-p1 flex mt-5">
      <ImagesCarousel images={images} />
      <div id="product-detail-section" className="w-6/12 pt-8">
        <h6>{`Inicio / ${category}`}</h6>
        <h4 className="py-5 px-0 text-[26px] font-inder">{name}</h4>
        <StarRating classNames="w-8 h-8" />
        <Price price={price} tagName="span" classNames="text-3xl" />
        <ProductSelector options={dummyOptions} />
        <div className="flex gap-4">
          <QuantitySelector itemsInStock={countInStock} product={product} />
          <AddToCartButton component={'product-detail'} />
        </div>
        <h4 className="pb-5 pt-12 px-0 text-[26px] font-inder">
          {PRODUCT_DETAILS_TITLE}
        </h4>
        <span className="leading-[25px]">{description}</span>
      </div>
    </section>
  )
}
