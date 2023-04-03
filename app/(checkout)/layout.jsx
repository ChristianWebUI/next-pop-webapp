import CheckoutProvider from '@/context/CheckoutContextProvider'

export default function CheckoutLayout({ children }) {
  return <CheckoutProvider>{children}</CheckoutProvider>
}
