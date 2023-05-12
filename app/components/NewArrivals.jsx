'use client'
import ProductCard from '@/components/ProductCard'
import { NEW_ARRIVALS_PARAGRAPH, NEW_ARRIVALS_TITLE } from '@/constants/home'
import useNewArrivals from '@/hooks/useNewArrivals'

export default function NewArrivals() {
  const { loading, error, newArrivals, formatCurrency } = useNewArrivals()
  return (
    <section id="new-arrivals" className="section-p1 text-center">
      <h2>{NEW_ARRIVALS_TITLE}</h2>
      <p>{NEW_ARRIVALS_PARAGRAPH}</p>
      <div className="flex justify-start gap-x-9 flex-wrap pt-5">
        {loading && <>Loading Featured Products ...</>}
        {error && <>Error on featured products</>}
        {newArrivals &&
          newArrivals.map((newArrival, index) => (
            <ProductCard
              key={`${newArrival.slug}${index}`}
              product={newArrival}
              formatCurrency={formatCurrency}
            />
          ))}
      </div>
    </section>
  )
}
