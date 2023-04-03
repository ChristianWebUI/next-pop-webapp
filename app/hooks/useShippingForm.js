import {
  SHIPPING_ADDRESS_TITLE,
  SHIPPING_FORM_FIELDS
} from '@/constants/checkout'
import { useCheckoutContext } from '@/context/CheckoutContextProvider'
import { useStoreContext } from '@/context/StoreContext'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function useShippingForm() {
  const { state, dispatch } = useStoreContext()
  const { goToNextStep } = useCheckoutContext()
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue
  } = useForm()
  const {
    cart: { shippingAddress }
  } = state

  useEffect(() => {
    SHIPPING_FORM_FIELDS.map(({ id }) => id).forEach((field) => {
      setValue(field, shippingAddress[field])
    })
  }, [setValue, shippingAddress])

  const onSubmit = (fields) => {
    dispatch({ type: 'SAVE_SHIPPING_ADDRESS', payload: { ...fields } })
    goToNextStep()
  }

  const formFields = SHIPPING_FORM_FIELDS.map(({ id, name, options }) => ({
    id,
    name,
    options,
    register: register(id, { ...options }),
    error: errors[id]?.message
  }))

  return {
    onSubmit: handleSubmit(onSubmit),
    formFields,
    title: SHIPPING_ADDRESS_TITLE
  }
}
