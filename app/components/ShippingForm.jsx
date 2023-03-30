'use client'
import {
  SHIPPING_ADDRESS_STEP as SHIPPING_ADDRESS_TITLE,
  SHIPPING_FORM_FIELDS
} from '@/constants/checkout'
import { useStoreContext } from '@/context/StoreContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function ShippingForm() {
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

  const submitHandler = (fields) => {
    dispatch({ type: 'SAVE_SHIPPING_ADDRESS', payload: { ...fields } })
    router.push('/payment')
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="mx-auto max-w-screen-md"
    >
      <h1 className="mb-4 text-xl">{SHIPPING_ADDRESS_TITLE}</h1>
      {SHIPPING_FORM_FIELDS.map(({ id, name, options }) => (
        <div key={id} className="mb-4">
          <label htmlFor={id}>{name}</label>
          <input
            id={id}
            className="shipping-input-group w-full"
            type="text"
            autoFocus
            {...register(id, { ...options })}
          />
          {errors[id] && (
            <div className="text-red-500">{errors[id].message}</div>
          )}
        </div>
      ))}
      <div className="mb-4 flex justify-between">
        <button className="primary-button">Next</button>
      </div>
    </form>
  )
}
