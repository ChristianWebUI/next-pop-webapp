/* eslint-disable multiline-ternary */
'use client'
import classnames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NavigationLink({ route, label, children }) {
  const pathname = usePathname()
  const isActive = route === pathname
  const [isCart, setIsCart] = useState(false)
  useEffect(() => {
    setIsCart(pathname === '/cart')
  }, [pathname])
  return (
    <Link
      href={route}
      className={`no-underline text-base font-semibold text-primary-link-color lg:hover:text-primary-accent-color navlink lg:hover:after:content-[""] lg:hover:after:w-1/3 lg:hover:after:h-[2px] lg:hover:after:bg-primary-accent-color lg:hover:after:absolute lg:hover:after:bottom-[-4px] lg:hover:after:left-[20px] ${
        isActive
          ? classnames(
              'text-primary-accent-color after:content-[""] lg:after:w-1/3 after:h-[2px] after:bg-primary-accent-color after:absolute lg:after:bottom-[-4px] lg:after:left-[20px] md:after:w-8 after:w-6 ',
              {
                'after:bottom-auto after:left-auto': isCart
              },
              {
                'after:bottom-0 after:left-1/4': !isCart
              }
            )
          : ''
      }`}
    >
      {label || children}
    </Link>
  )
}
