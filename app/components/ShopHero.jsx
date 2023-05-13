import { SHOP_HERO_PARAGRAPH, SHOP_HERO_TITLE } from '@/constants/shop'

export default function ShopHero() {
  return (
    <section
      id="shop-hero"
      className="w-full bg-[url('/shop/shop-pdp-banner.jpeg')] bg-cover h-[40vh] flex justify-center text-center flex-col p-3.5"
    >
      <h2 className="text-white">{SHOP_HERO_TITLE}</h2>
      <p className="text-white">{SHOP_HERO_PARAGRAPH}</p>
    </section>
  )
}
