import CartNavigationLink from '@/components/CartNavigationLink'
import Link from 'next/link'

const LINKS_IDS = {
  cart: 'cart',
  login: 'login'
}

const links = [
  { id: LINKS_IDS.cart, label: '🛒', route: '/cart' },
  { id: LINKS_IDS.login, label: '🐱', route: '/login' }
]

export default function Header() {
  return (
    <header>
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/">
          <span className="text-lg font-bold">P de Papel</span>
        </Link>
        <div>
          {links.map(({ id, label, route }) =>
            id === LINKS_IDS.cart ? (
              <CartNavigationLink key={id} route={route} label={label} />
            ) : (
              <Link key={id} href={route} className="p-2">
                {label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  )
}
