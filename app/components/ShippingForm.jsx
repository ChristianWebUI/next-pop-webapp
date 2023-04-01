'use client'
import useShippingForm from '@/hooks/useShippingForm'

export default function ShippingForm() {
  const { onSubmit, formFields, title } = useShippingForm()
  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-screen-md">
      <h1 className="mb-4 text-xl">{title}</h1>
      {formFields.map(({ id, name, register, error }) => (
        <div key={id} className="mb-4">
          <label htmlFor={id}>{name}</label>
          <input
            id={id}
            className="shipping-input-group w-full"
            type="text"
            autoFocus
            {...register}
          />
          {error && <div className="text-red-500">{error}</div>}
        </div>
      ))}
      <div className="mb-4 flex justify-between">
        <button className="primary-button">Next</button>
      </div>
    </form>
  )
}
