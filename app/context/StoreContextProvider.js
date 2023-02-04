'use client'
import { initialState, reducer, StoreContext } from '@/context/StoreContext'
import { useReducer } from 'react'

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
