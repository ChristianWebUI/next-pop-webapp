import CheckoutStep from '@/components/CheckoutStep'
import { CHECKOUT_STEPS_NAMES } from '@/constants/checkout'

export default function CheckoutWizard() {
  return (
    <div className="mb-5 flex flex-wrap">
      {CHECKOUT_STEPS_NAMES.map((step, index) => (
        <CheckoutStep key={step} stepName={step} index={index} />
      ))}
    </div>
  )
}
