'use client'
import CircleSpinner from '@/components/CircleSpinner'
import DropdownLink from '@/components/DropdownLink'
import NavigationLink from '@/components/NavigationLink'
import { SESSION_STATUS } from '@/constants/session'
import { useHandleSignOut, useSessionStatus } from '@/hooks/useUserSession'
import { Menu } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/24/outline'

export default function LoginNavigationLink({ key, route, subMenu }) {
  const handleSignOut = useHandleSignOut()
  const { status, session } = useSessionStatus()
  const { loading } = SESSION_STATUS
  return status === loading ? (
    <CircleSpinner />
  ) : session?.user ? (
    <Menu key={key} as="div" className="relative inline-block z-10">
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
    <NavigationLink route={route}>
      <UserIcon className="h-5 w-5" />
    </NavigationLink>
  )
}
