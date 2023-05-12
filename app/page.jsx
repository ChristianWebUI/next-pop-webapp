import Banner from '@/components/Banner'
import BannersCallToAction from '@/components/BannersCallToAction'
import Feature from '@/components/Feature'
import FeaturedProducts from '@/components/FeaturedProducts'
import Hero from '@/components/Hero'
import NewArrivals from '@/components/NewArrivals'
import Newsletter from '@/components/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <FeaturedProducts />
      <Banner />
      <NewArrivals />
      <BannersCallToAction />
      <Newsletter />
    </>
  )
}
