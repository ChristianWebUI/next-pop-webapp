'use client'
import CartNavigationLink from '@/components/CartNavigationLink'
import LoginNavigationLink from '@/components/LoginNavigationLink'
import NavigationLink from '@/components/NavigationLink'
import { HOME_PAGE } from '@/constants/checkout'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const LINK_NAMES = {
  home: 'home',
  shop: 'shop',
  blog: 'blog',
  about: 'about',
  contact: 'contact',
  cart: 'cart',
  login: 'login'
}

const links = [
  {
    name: LINK_NAMES.home,
    label: 'Inicio',
    route: '/',
    Component: NavigationLink
  },
  {
    name: LINK_NAMES.shop,
    label: 'Tienda',
    route: '/shop',
    Component: NavigationLink
  },
  {
    name: LINK_NAMES.blog,
    label: 'Blog',
    route: '/blog',
    Component: NavigationLink
  },
  {
    name: LINK_NAMES.about,
    label: 'Nosotros',
    route: '/about',
    Component: NavigationLink
  },
  {
    name: LINK_NAMES.contact,
    label: 'Contacto',
    route: '/contact',
    Component: NavigationLink
  },
  {
    name: LINK_NAMES.cart,
    route: '/cart',
    Component: CartNavigationLink
  },
  {
    name: LINK_NAMES.login,
    route: '/login',
    Component: LoginNavigationLink,
    subMenu: [
      { route: '/profile', label: 'Profile' },
      { route: '/order-history', label: 'Order History' },
      { route: '#', label: 'Logout' }
    ]
  }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header id="header" className="sticky top-0 left-0 z-[999]">
      <nav
        id="navigation"
        className="flex items-center justify-between px-20 py-5 bg-primary-nav-color shadow-nav"
      >
        <Link href={HOME_PAGE} id="header-logo" className="w-16 h-16">
          <Image
            src="/logo_p_de_papel.png"
            alt="Logo Papeleria P de Papel"
            width={200}
            height={200}
            quality={100}
            priority
            className="w-full h-auto object-contain"
          />
        </Link>
        <div>
          <ul
            id="navbar"
            className={`flex items-center justify-center ${
              isOpen ? 'opened' : ''
            }`}
          >
            {links.map(({ name, label, route, Component, subMenu }) => (
              <li
                key={name}
                id={`lg-${route.replace(/\//g, '')}`}
                className="px-5 relative"
              >
                <Component
                  label={label ?? undefined}
                  route={route}
                  subMenu={subMenu ?? undefined}
                />
              </li>
            ))}
            <Link href="#" id="close" className="hidden" onClick={toggleMenu}>
              <XMarkIcon />
            </Link>
          </ul>
        </div>
        <div id="mobile" className="hidden items-center">
          <CartNavigationLink route="/cart" />
          <Bars4Icon id="bars" className="w-8 h-8" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  )
}
