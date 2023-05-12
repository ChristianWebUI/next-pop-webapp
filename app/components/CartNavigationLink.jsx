import CartBadge from '@/components/CartBadge'
import NavigationLink from '@/components/NavigationLink'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function CartNavigationLink({ route }) {
  return (
    <NavigationLink route={route}>
      <ShoppingBagIcon className="h-5 w-5" />
      <CartBadge />
    </NavigationLink>
  )
}
