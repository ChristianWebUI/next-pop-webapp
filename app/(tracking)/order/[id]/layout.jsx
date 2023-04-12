'use client'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

export default function OrderLayout({ children }) {
  return (
    <PayPalScriptProvider deferLoading={true}>{children}</PayPalScriptProvider>
  )
}
