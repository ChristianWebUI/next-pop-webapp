import CheckoutWizard from '@/components/CheckoutWizard'
import ShippingForm from '@/components/ShippingForm'

export default function ShippingPage() {
  return (
    <>
      <CheckoutWizard activeStep={1} />
      <ShippingForm />
    </>
  )
}
