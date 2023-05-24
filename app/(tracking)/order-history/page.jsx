import Newsletter from '@/components/Newsletter'
import OrderHistory from '@/components/OrderHistory'
import OrderHistoryHero from '@/components/OrderHistoryHero'

export const metadata = {
  title: 'Order History'
}

export default function OrderHistoryPage() {
  return (
    <>
      <OrderHistoryHero />
      <OrderHistory />
      <Newsletter />
    </>
  )
}
