'use client'
import CircleSpinner from '@/components/CircleSpinner'
import DropdownLink from '@/components/DropdownLink'
import NavigationLink from '@/components/NavigationLink'
import { SESSION_STATUS } from '@/constants/session'
import { useHandleSignOut, useSessionStatus } from '@/hooks/useUserSession'
import { Menu } from '@headlessui/react'
import { UserIcon } from '@heroicons/react/24/outline'
import avatar from 'animal-avatar-generator'
import Image from 'next/image'
import { useRef } from 'react'

export default function LoginNavigationLink({ key, route, subMenu }) {
  const handleSignOut = useHandleSignOut()
  const ref = useRef()
  const { status } = useSessionStatus()
  const { loading } = SESSION_STATUS
  const mockedSession = {
    user: {
      name: 'Rosa Torres Martinez'
    }
  }
  const avatarSvg = avatar(mockedSession.user.name, { size: 24 })
  return status === loading ? (
    <CircleSpinner />
  ) : mockedSession?.user ? (
    <Menu key={key} as="div" className="relative inline-block z-10">
      <Menu.Button className="flex items-center gap-2">
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(avatarSvg)}`}
          alt="avatar-profile"
          width={0}
          height={0}
          priority
          quality={100}
          sizes="100vw"
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        />
        {mockedSession.user.name.split(' ')[0]}
      </Menu.Button>
      <Menu.Items className="absolute w-[300px] lg:left-[-133px] lg:top-[4.2rem] md:right-24 md:top-0 origin-top-left bg-primary-nav-color shadow-nav">
        {subMenu.map((subItem) => (
          <Menu.Item key={subItem.route}>
            <DropdownLink
              className="group flex p-4 items-center justify-start hover:text-primary-accent-color relative"
              href={subItem.route ?? undefined}
              onClick={subItem.route === 'logout' ? handleSignOut : undefined}
              ref={ref}
            >
              {subItem.icon}
              {subItem.label}
              <span className="w-1/5 h-px bg-primary-accent-color absolute bottom-4 ml-6 hidden group-hover:block transition-all duration-500 ease-linear"></span>
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
