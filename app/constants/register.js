// SIGN IN

export const SIGNIN_TEXT = 'Sign In'
export const SIGNIN_FORGET_PASSWORD = 'Forget Password'
export const SIGNIN_SIGNUP_LINK = 'Sign Up'
export const SIGNIN_BUTTON = 'Login'

// SIGN UP
export const SIGNUP_TEXT = 'Sign Up'
export const SIGNUP_BUTTON = 'Register'
export const SIGNUP_SIGNIN_LINK = 'Sign In'

export const REGISTER_FORM_FIELDS = (getValues, { setImageUrl, imageUrl }) => [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    autoFocus: true,
    options: { required: 'Please enter your full name' }
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    autoFocus: true,
    options: {
      required: 'Please enter your email',
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
        message:
          'Email is required and should be in the format example@domain.com.'
      }
    }
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    autoFocus: true,
    options: {
      required: 'Please enter password',
      minLength: {
        value: 6,
        message: 'password must have more than 5 characters'
      }
    }
  },
  {
    id: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    autoFocus: false,
    options: {
      required: 'Please confirm your password',
      validate: (value) => value === getValues('password'),
      minLength: {
        value: 6,
        message: 'confirm password is more than 5 chars'
      }
    }
  },
  {
    id: 'profilePicture',
    label: 'Profile Picture',
    type: 'url',
    value: imageUrl,
    onChange: (event) => setImageUrl(event.target.value),
    autoFocus: false,
    options: {}
  }
]
