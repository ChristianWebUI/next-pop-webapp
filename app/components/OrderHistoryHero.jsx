import {
  ORDER_HISTORY_HERO_TITLE,
  ORDER_HISTORY_PARAGRAPH
} from '@/constants/order'

export default function OrderHistoryHero() {
  return (
    <section
      id="order-history-hero"
      className="w-full bg-[url('/about/about-banner-pdp.png')] bg-cover h-[40vh] flex justify-center text-center flex-col p-3.5"
    >
      <h2 className="text-white">{ORDER_HISTORY_HERO_TITLE}</h2>
      <p className="text-white">{ORDER_HISTORY_PARAGRAPH}</p>
    </section>
  )
}
