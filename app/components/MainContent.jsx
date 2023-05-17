'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'

const WITHOUT_HEADER = ['login', 'register']
const WITHOUT_FOOTER = ['login', 'register']

export default function MainContent({ children }) {
  const pathname = usePathname()
  const excludeHeader = WITHOUT_HEADER.includes(pathname.replace(/\//g, ''))
  const excludeFooter = WITHOUT_FOOTER.includes(pathname.replace(/\//g, ''))
  return (
    <>
      {!excludeHeader && <Header />}
      {children}
      {!excludeFooter && <Footer />}
    </>
  )
}
