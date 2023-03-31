import CheckoutWizard from '@/components/CheckoutWizard'
import ShippingForm from '@/components/ShippingForm'

export const metadata = {
  title: 'Shipping Address'
}

export default function ShippingPage() {
  return (
    <>
      <CheckoutWizard activeStep={1} />
      <ShippingForm />
    </>
  )
}
