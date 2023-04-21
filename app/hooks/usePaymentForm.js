import { useCheckoutContext } from '@/context/CheckoutContextProvider'
import { useStoreContext } from '@/context/StoreContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import * as yup from 'yup'

const schema = yup.object({
  paymentMethod: yup
    .string()
    .required('Please select an available payment method')
})

export default function usePaymentForm() {
  const { state, dispatch } = useStoreContext()
  const { goToNextStep, goToPreviousStep } = useCheckoutContext()
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm({ resolver: yupResolver(schema) })
  const {
    cart: { shippingInfo, paymentMethod }
  } = state

  const onSubmit = ({ paymentMethod }) => {
    dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod })
    goToNextStep()
  }

  useEffect(() => {
    if (!shippingInfo.address) {
      return goToPreviousStep()
    }
    setValue('paymentMethod', paymentMethod)
  }, [goToPreviousStep, paymentMethod, setValue, shippingInfo.address])

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors
  }
}
