import CheckoutWizard from '@/components/CheckoutWizard'
import PaymentForm from '@/components/PaymentForm'

export const metadata = {
  title: 'Payment Method'
}

export default function PaymentPage() {
  return (
    <>
      <CheckoutWizard />
      <PaymentForm />
    </>
  )
}
