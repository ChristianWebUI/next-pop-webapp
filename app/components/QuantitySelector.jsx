'use client'
import { useState } from 'react'
import Select from 'react-select'

export default function QuantitySelector({
  quantity = 1,
  itemsInStock,
  product
}) {
  const [quantitySelected, setQuantitySelected] = useState({
    value: quantity,
    label: String(quantity)
  })
  const handleChangeQuantity = (option) => setQuantitySelected(option)
  return (
    <Select
      options={[...Array(itemsInStock).keys()].map((number) => ({
        value: number + 1,
        label: String(number + 1)
      }))}
      isClearable={false}
      isLoading={!itemsInStock}
      onChange={handleChangeQuantity}
      defaultValue={{ value: 1, label: '1' }}
      value={quantitySelected}
      className="flex w-auto text-base"
    />
  )
}
