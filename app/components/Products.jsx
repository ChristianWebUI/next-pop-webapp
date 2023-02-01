import ProductItem from '@/components/ProductItem'
import data from '@/utils/data'

export default function Products() {
  const { products } = data
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductItem {...product} key={product.slug} />
      ))}
    </div>
  )
}
