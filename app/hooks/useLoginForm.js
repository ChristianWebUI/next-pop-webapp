import { getErrorMessage } from '@/utils/error'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

export default function useLoginForm(searchParams) {
  const { data: session } = useSession()
  const router = useRouter()
  const { redirect } = searchParams
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()

  const onSubmit = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      })
      if (result.error) alert(result.error)
    } catch (error) {
      alert(getErrorMessage(error))
    }
  }

  useEffect(() => {
    if (session?.user) router.push(redirect || '/')
  }, [router, redirect, session])

  return { handleSubmit, register, errors, onSubmit }
}
