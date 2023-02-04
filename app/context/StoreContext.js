/* eslint-disable multiline-ternary */
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
      const newState = { ...state, cart: { ...state.cart, cartItems } }
      storeData(STORAGE_KEYS.cart, newState)
      return newState
    }

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      )
      const newState = { ...state, cart: { ...state.cart, cartItems } }
      storeData(STORAGE_KEYS.cart, newState)
      return newState
    }

    default: {
      storeData(STORAGE_KEYS.cart, state)
      return state
    }
  }
}

export const useStoreContext = () => useContext(StoreContext)
