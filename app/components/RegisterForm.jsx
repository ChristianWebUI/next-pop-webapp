import {
  SIGNUP_BUTTON,
  SIGNUP_SIGNIN_LINK,
  SIGNUP_TEXT
} from '@/constants/register'
import { HomeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function RegisterForm() {
  return (
    <form className="register">
      <Link href="/">
        <HomeIcon className="w-6 h-6 text-[#8f2c24]" />
      </Link>
      <Image
        src="/logos/no-text-transparent-bg.webp"
        alt="Logo Papeleria P de Papel"
        width={4000}
        height={2000}
        quality={100}
        className="w-36 h-auto m-auto"
      />
      <h2>{SIGNUP_TEXT}</h2>
      <div className="inputbox">
        <input type="text" name="name" id="name" placeholder="Your Name" />
      </div>
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
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>
      <div className="inputbox">
        <input type="submit" value={SIGNUP_BUTTON} id="register-btn" />
      </div>
      <div className="group">
        Do you have an account? &nbsp;
        <Link href="/login">{SIGNUP_SIGNIN_LINK}</Link>
      </div>
    </form>
  )
}
