import {
  SIGNIN_BUTTON,
  SIGNIN_FORGET_PASSWORD,
  SIGNIN_SIGNUP_LINK,
  SIGNIN_TEXT
} from '@/constants/register'
import Link from 'next/link'
export default function LoginForm() {
  return (
    <form className="login">
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
