'use client'
import Image from 'next/image'
import { useState } from 'react'
import Select from 'react-select'
export default function ProductSelector({ options }) {
  const [optionSelected, setOptionSelected] = useState(null)
  const handleOptionSelected = (e) => setOptionSelected(e?.value)
  return (
    <>
      <Select
        isClearable
        isLoading={!options}
        onChange={handleOptionSelected}
        className={`block w-full md:w-6/12 mt-4 ${
          optionSelected ? 'mb-4' : ''
        }`}
        options={options}
        formatOptionLabel={({ color, label, imageUrl }) =>
          color ? (
            <div className="flex items-center">
              <span className="w-[10px] h-[10px] mr-1 rounded-full"></span>
              {label}
            </div>
          ) : (
            <div className="flex items-center">
              <Image
                src={imageUrl}
                alt={label}
                width={20}
                height={20}
                quality={100}
                priority
                className="mr-3"
              />
              {label}
            </div>
          )
        }
      />
      {!optionSelected && (
        <span className="text-red-500 text-xs block mb-4">
          Debes seleccionar un modelo
        </span>
      )}
    </>
  )
}
