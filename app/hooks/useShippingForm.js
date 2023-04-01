import {
  SHIPPING_ADDRESS_STEP as SHIPPING_ADDRESS_TITLE,
  SHIPPING_FORM_FIELDS
} from '@/constants/checkout'
import { useStoreContext } from '@/context/StoreContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function useShippingForm() {
  const { state, dispatch } = useStoreContext()
  const router = useRouter()
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
    router.push('/payment')
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
