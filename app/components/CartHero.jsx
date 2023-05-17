import { CART_HERO_PARAGRAPH, CART_HERO_TITLE } from '@/constants/cart'

export default function CartHero() {
  return (
    <section
      id="cart-hero"
      className="w-full bg-[url('/cart/cart-pdp-banner.png')] bg-cover h-[40vh] flex justify-center text-center flex-col p-3.5"
    >
      <h2 className="text-white">{CART_HERO_TITLE}</h2>
      <p className="text-white">{CART_HERO_PARAGRAPH}</p>
    </section>
  )
}
