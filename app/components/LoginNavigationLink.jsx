'use client'
import DropdownLink from '@/components/DropdownLink'
import { useStoreContext } from '@/context/StoreContext'
import { clearCookie, STORAGE_KEYS } from '@/utils/storage'
import { Menu } from '@headlessui/react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const SESSION_STATUS = {
  loading: 'loading'
}

export default function LoginNavigationLink({ key, route, label, subMenu }) {
  const { dispatch } = useStoreContext()
  const { status, data: session } = useSession()
  const { loading } = SESSION_STATUS
  const handleSignOut = () => {
    clearCookie(STORAGE_KEYS.cart)
    dispatch({ type: 'CART_RESET' })
    signOut({ callbackUrl: '/login' })
  }
  return status === loading ? (
    'Loading'
  ) : session?.user ? (
    <Menu key={key} as="div" className="relative inline-block">
      <Menu.Button className="text-blue-600">{session.user.name}</Menu.Button>
      <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
        {subMenu.map((subItem) => (
          <Menu.Item key={subItem.route}>
            <DropdownLink
              className="dropdown-link"
              href={subItem.route}
              onClick={subItem.route === '#' ? handleSignOut : undefined}
            >
              {subItem.label}
            </DropdownLink>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  ) : (
    <Link key={key} href={route} className="p-2">
      {label}
    </Link>
  )
}
