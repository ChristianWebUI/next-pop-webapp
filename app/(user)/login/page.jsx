import LoginForm from '@/components/LoginForm'
import RegisterForm from '@/components/RegisterForm'
import Image from 'next/image'
import './login.css'

export default function LoginPage({ children }) {
  return (
    <section id="login">
      <div className="leaves">
        <div className="set">
          <div>
            <Image
              src="/login/leaf_01.png"
              alt="leaf-1"
              width={79}
              height={38}
              priority
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/login/leaf_02.png"
              alt="leaf-2"
              width={65}
              height={58}
              priority
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/login/leaf_03.png"
              alt="leaf-3"
              width={60}
              height={43}
              priority
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/login/leaf_04.png"
              alt="leaf-4"
              width={68}
              height={40}
              priority
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/login/leaf_01.png"
              alt="leaf-1"
              width={79}
              height={38}
              priority
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/login/leaf_02.png"
              alt="leaf-2"
              width={65}
              height={58}
              priority
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/login/leaf_03.png"
              alt="leaf-3"
              width={60}
              height={43}
              priority
              quality={100}
            />
          </div>
          <div>
            <Image
              src="/login/leaf_04.png"
              alt="leaf-4"
              width={68}
              height={40}
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
      <Image
        className="bg w-full h-full"
        src="/login/bg.jpeg"
        alt="wood-trees"
        width={0}
        height={0}
        priority
        quality={100}
        sizes="100vw"
      />
      <Image
        className="girl"
        src="/login/girl.png"
        alt="girl-riding"
        width={476}
        height={539}
        priority
        quality={100}
      />
      {!children ? <LoginForm /> : <RegisterForm />}
      <Image
        src="/login/trees.png"
        alt="trees"
        width={0}
        height={0}
        priority
        quality={100}
        sizes="100vw"
        className="trees w-full h-full"
      />
    </section>
  )
}
