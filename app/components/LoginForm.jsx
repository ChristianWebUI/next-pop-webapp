import {
  SIGNIN_BUTTON,
  SIGNIN_FORGET_PASSWORD,
  SIGNIN_SIGNUP_LINK,
  SIGNIN_TEXT
} from '@/constants/register'
import { HomeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
export default function LoginForm() {
  return (
    <form className="login">
      <Link href="/">
        <HomeIcon className="w-6 h-6 text-[#8f2c24]" />
      </Link>
      <Image
        src="/logo_p_de_papel.png"
        alt="Logo Papeleria P de Papel"
        width={200}
        height={200}
        quality={100}
        className="w-20 h-auto object-contain m-auto"
      />
      <h2>{SIGNIN_TEXT}</h2>
      <div className="inputbox">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
        />
      </div>
      <div className="inputbox">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div className="inputbox">
        <input type="submit" value={SIGNIN_BUTTON} id="btn" />
      </div>
      <div className="group">
        <Link href="#">{SIGNIN_FORGET_PASSWORD}</Link>
        <Link href="/register">{SIGNIN_SIGNUP_LINK}</Link>
      </div>
    </form>
  )
}
