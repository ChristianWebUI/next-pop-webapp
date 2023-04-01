import CartBadge from '@/components/CartBadge'
import Link from 'next/link'

export default function CartNavigationLink({ route, label }) {
  return (
    <Link href={route} className="p-2">
      {label}
      <CartBadge />
    </Link>
  )
}
