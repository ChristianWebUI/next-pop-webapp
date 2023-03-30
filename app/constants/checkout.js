export const USER_LOGIN_STEP = 'User Login'
export const SHIPPING_ADDRESS_STEP = 'Shipping Address'
export const PAYMENT_METHOD_STEP = 'Payment Method'
export const PLACE_ORDER_STEP = 'Place Order'

export const CHECKOUT_STEPS = [
  USER_LOGIN_STEP,
  SHIPPING_ADDRESS_STEP,
  PLACE_ORDER_STEP,
  PAYMENT_METHOD_STEP
]

export const SHIPPING_FORM_FIELDS = [
  {
    id: 'fullName',
    name: 'Full Name',
    options: { required: 'Please enter full name' }
  },
  {
    id: 'address',
    name: 'Address',
    options: {
      required: 'Please enter address',
      minLength: { value: 3, message: 'Address is more than 2 characters' }
    }
  },
  {
    id: 'city',
    name: 'City',
    options: { required: 'Please enter city' }
  },
  {
    id: 'postalCode',
    name: 'Postal Code',
    options: { required: 'Please enter postal code' }
  },
  {
    id: 'country',
    name: 'Country',
    options: { required: 'Please enter country' }
  }
]
