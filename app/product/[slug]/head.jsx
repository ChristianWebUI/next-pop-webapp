import data from '@/utils/data'

export default function Head({ params }) {
  const { slug } = params
  const product = data.products.find((prod) => prod.slug === slug)
  return (
    <>
      <title>{product.name}</title>
    </>
  )
}
