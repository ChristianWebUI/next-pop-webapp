import CartNavigationLink from '@/components/CartNavigationLink'
import LoginNavigationLink from '@/components/LoginNavigationLink'
import { HOME_PAGE } from '@/constants/checkout'
import Link from 'next/link'

const LINK_NAMES = {
  cart: 'cart',
  login: 'login'
}

const links = [
  {
    name: LINK_NAMES.cart,
    label: '🛒',
    route: '/cart',
    Component: CartNavigationLink
  },
  {
    name: LINK_NAMES.login,
    label: '🐱',
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
  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href={HOME_PAGE}>
          <span className="text-lg font-bold">P de Papel</span>
        </Link>
        <div>
          {links.map(({ name, label, route, Component, subMenu }) => (
            <Component
              key={name}
              label={label}
              route={route}
              subMenu={subMenu ?? undefined}
            />
          ))}
        </div>
      </nav>
    </header>
  )
}
