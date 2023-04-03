import CheckoutWizard from '@/components/CheckoutWizard'
import OrderConfirmationForm from '@/components/OrderConfirmationForm'

export const metadata = {
  title: 'Place Order'
}

export default function PlaceOrderPage() {
  return (
    <>
      <CheckoutWizard />
      <OrderConfirmationForm />
    </>
  )
}
