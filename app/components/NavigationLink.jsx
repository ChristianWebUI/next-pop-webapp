/* eslint-disable multiline-ternary */
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationLink({ route, label, children }) {
  const pathname = usePathname()
  const isActive = route === pathname
  return (
    <Link
      href={route}
      className={`no-underline text-base font-semibold text-primary-link-color hover:text-primary-accent-color navlink hover:after:content-[""] hover:after:w-1/3 hover:after:h-[2px] hover:after:bg-primary-accent-color hover:after:absolute hover:after:bottom-[-4px] hover:after:left-[20px] ${
        isActive
          ? 'text-primary-accent-color after:content-[""] lg:after:w-1/3 after:h-[2px] after:bg-primary-accent-color after:absolute lg:after:bottom-[-4px] lg:after:left-[20px] md:after:w-8 after:w-6'
          : ''
      }`}
    >
      {label || children}
    </Link>
  )
}
