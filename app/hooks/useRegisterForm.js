import { REGISTER_FORM_FIELDS } from '@/constants/register'
import { REGISTER_USER } from '@/graphql-mutations/registerUser'
import { getErrorMessage } from '@/utils/error'
import { normalizeCallbackUrl } from '@/utils/login'
import { useMutation } from '@apollo/client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function useRegisterForm(searchParams) {
  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: async (data) => {
      try {
        const email = data?.registerUser?.email
        const password = getValues('password')
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password
        })
        if (result.error) alert(result.error)
      } catch (error) {
        getErrorMessage(error)
      }
    }
  })
  const [imageUrl, setImageUrl] = useState('')
  const { data: session } = useSession()
  const router = useRouter()
  const { callbackUrl } = searchParams
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors }
  } = useForm()

  const onSubmit = async (fields) => {
    try {
      const { confirmPassword, ...registerFields } = fields
      await registerUser({ variables: { input: { ...registerFields } } })
    } catch (error) {
      alert(getErrorMessage(error))
    }
  }

  const formFields = REGISTER_FORM_FIELDS(getValues, {
    setImageUrl,
    imageUrl
  }).map(({ id, label, type, options, ...rest }) => ({
    id,
    label,
    type,
    register: register(id, { ...options }),
    error: errors[id]?.message,
    isConfirmPasswordError:
      id === 'confirmPassword' && errors[id] && errors[id]?.type === 'validate',
    rest: { ...rest }
  }))

  useEffect(() => {
    if (session?.user) {
      router.push(callbackUrl ? normalizeCallbackUrl(callbackUrl) : '/')
    }
  }, [router, session, callbackUrl])

  return {
    handleSubmit,
    formFields,
    onSubmit,
    redirect: callbackUrl || '/'
  }
}
