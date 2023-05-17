import {
  SIGNUP_BUTTON,
  SIGNUP_SIGNIN_LINK,
  SIGNUP_TEXT
} from '@/constants/register'
import Image from 'next/image'
import Link from 'next/link'

export default function RegisterForm() {
  return (
    <form className="register">
      <Image
        src="/logo_p_de_papel.png"
        alt="Logo Papeleria P de Papel"
        width={200}
        height={200}
        quality={100}
        className="w-20 h-auto object-contain m-auto"
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
