'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'

const VALID_URLS = [
  '/login',
  '/register',
  '/shipping',
  '/payment',
  '/placeorder',
  '/order',
  '/shop',
  '/blog',
  '/about',
  '/contact',
  '/',
  '/cart',
  '/profile',
  '/order-history'
]
const WITHOUT_HEADER = ['login', 'register']
const WITHOUT_FOOTER = [
  'login',
  'register',
  'shipping',
  'payment',
  'placeorder'
]

export default function MainContent({ children }) {
  const pathname = usePathname()
  const isValidURL = VALID_URLS.includes(pathname)
  const excludeHeader =
    WITHOUT_HEADER.includes(pathname.replace(/\//g, '')) || !isValidURL
  const excludeFooter =
    WITHOUT_FOOTER.includes(pathname.replace(/\//g, '')) ||
    pathname.startsWith('/order/') ||
    !isValidURL
  return (
    <>
      {!excludeHeader && <Header />}
      {children}
      {!excludeFooter && <Footer />}
    </>
  )
}
