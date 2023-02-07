'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const SESSION_STATUS = {
  loading: 'loading'
}

export default function LoginNavigationLink({ key, route, label }) {
  const { status, data: session } = useSession()
  const { loading } = SESSION_STATUS
  return status === loading ? (
    'Loading'
  ) : session?.user ? (
    session.user.name
  ) : (
    <Link href={route} className="p-2">
      {label}
    </Link>
  )
}
