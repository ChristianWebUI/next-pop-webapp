/* eslint-disable indent */
import { createContext, useContext } from 'react'

export const StoreContext = createContext()

export const initialState = {
  cart: { cartItems: [] }
}

export function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      )
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem]
      return { ...state, cart: { ...state.cart, cartItems } }
    }

    default:
      return state
  }
}

export const useStoreContext = () => useContext(StoreContext)
