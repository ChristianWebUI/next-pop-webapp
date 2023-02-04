/* eslint-disable indent */
import {
  getDataFromLocalStorage,
  STORAGE_KEYS,
  storeData
} from '@/utils/storage'
import { createContext, useContext } from 'react'

export const StoreContext = createContext()

export const initialState = getInitialState()

function getInitialState() {
  if (getDataFromLocalStorage(STORAGE_KEYS.cart)) {
    return getDataFromLocalStorage(STORAGE_KEYS.cart)
  }
  return { cart: { cartItems: [] } }
}

export function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems?.find(
        (item) => item.slug === newItem.slug
      )
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem]
      storeData(STORAGE_KEYS.cart, {
        ...state,
        cart: { ...state.cart, cartItems }
      })
      return { ...state, cart: { ...state.cart, cartItems } }
    }

    default: {
      storeData(STORAGE_KEYS.cart, state)
      return state
    }
  }
}

export const useStoreContext = () => useContext(StoreContext)
