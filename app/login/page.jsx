import LoginForm from '@/components/LoginForm'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 relative h-full">
            <Image
              src="/images/Login-Background.png"
              alt="Owl Image"
              fill
              priority
              quality={100}
              className="w-full"
            ></Image>
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  )
}
