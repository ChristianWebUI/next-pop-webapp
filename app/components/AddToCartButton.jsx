'use client'
import { ADD_TO_CART_BUTTON } from '@/constants/productDetail'
import { GiftTopIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { ShoppingCartIcon as ShoppingCartSolid } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function AddToCartButton({ component }) {
  const [clicked, setClicked] = useState(false)
  if (component === 'product-detail') {
    return (
      <button
        type="button"
        className=" flex text-sm font-semibold px-[30px] py-[15px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s]"
      >
        {ADD_TO_CART_BUTTON}
        <ShoppingCartSolid className="w-5 h-5 ml-2" />
      </button>
    )
  }
  return (
    <button
      id="add-to-cart-button"
      type="button"
      className={`w-10 h-10 leading-10 rounded-full bg-primary-add-cart-color font-medium text-primary-accent-color border border-solid border-primary-border-color absolute bottom-5 right-3 hover:bg-primary-border-color ${
        clicked ? 'clicked' : ''
      }`}
      onClick={() => setClicked(true)}
    >
      <div className="relative">
        <ShoppingCartIcon name="shopping-icon" className="w-6 h-6 m-auto" />
        <GiftTopIcon className="w-3 h-3 absolute z-[3] translate-x-0 translate-y-[-19px] left-3.5 right-0 top-0 opacity-0 icon-gift" />
      </div>
    </button>
  )
}
