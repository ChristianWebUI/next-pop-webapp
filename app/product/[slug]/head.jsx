import data from '@/utils/data'

/** We can use this file for changing head for each route */

export default function Head({ params }) {
  const { slug } = params
  const product = data.products.find((prod) => prod.slug === slug)
  return (
    <>
      <title>{product.name}</title>
    </>
  )
}
