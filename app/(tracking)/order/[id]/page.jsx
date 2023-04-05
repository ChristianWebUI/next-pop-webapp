import OrderDetail from '@/components/OrderDetail'

export async function generateMetadata({ params }) {
  const { id } = params
  return { title: id ? `Order ${id}` : 'Order not found' }
}

export default function OrderPage({ params }) {
  const { id } = params
  return <OrderDetail orderId={id} />
}
