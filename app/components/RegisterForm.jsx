'use client'
import useRegisterForm from '@/hooks/useRegisterForm'
import Image from 'next/image'
import Link from 'next/link'

export default function RegisterForm({ searchParams }) {
  const { handleSubmit, formFields, onSubmit, redirect } =
    useRegisterForm(searchParams)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mb-4 text-xl">Create Account</h1>
      {formFields.map(
        ({
          id,
          label,
          type,
          register,
          error,
          isConfirmPasswordError,
          rest
        }) => {
          return (
            <div key={id} className="mb-6">
              <label htmlFor={id}>{label}</label>
              <input
                id={id}
                type={type}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                {...register}
                {...rest}
              />
              {error && <div className="text-red-500">{error}</div>}
              {isConfirmPasswordError && (
                <div className="text-red-500 ">Password do not match</div>
              )}
              {id === 'profilePicture' && rest.value && (
                <Image
                  src={rest.value}
                  alt={id}
                  width={70}
                  height={70}
                  quality={100}
                  priority
                  className="m-auto rounded-full h-[70px] w-[70px] mt-4"
                />
              )}
            </div>
          )
        }
      )}
      <button
        type="submit"
        className="inline-block px-7 py-3 bg-amber-300 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-400 hover:shadow-lg focus:bg-amber-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-500 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Register
      </button>
      <div className="mb-4">
        Do you have an account? &nbsp;
        <Link href={`/login?callbackUrl=${redirect}`}>Login</Link>
      </div>
    </form>
  )
}
