import CheckoutWizard from '@/components/CheckoutWizard'
import PaymentForm from '@/components/PaymentForm'

export default function PaymentPage() {
  return (
    <>
      <CheckoutWizard activeStep={2} />
      <PaymentForm />
    </>
  )
}
