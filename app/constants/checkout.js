export const USER_LOGIN_TITLE = 'User Login'
export const SHIPPING_ADDRESS_TITLE = 'Shipping Address'
export const PAYMENT_METHOD_TITLE = 'Payment Method'
export const PLACE_ORDER_TITLE = 'Place Order'
export const ORDER_ITEMS_TITLE = 'Order Items'
export const ORDER_SUMMARY_TITLE = 'Order Summary'
export const ITEMS_TITLE = 'Items'
export const TAX_TITLE = 'Tax'
export const SHIPPING_TITLE = 'Shipping'
export const TOTAL_TITLE = 'Total'
export const SHIPPING_ADDRESS_PAGE = 'shipping'
export const PAYMENT_METHOD_PAGE = 'payment'
export const PLACE_ORDER_PAGE = 'placeorder'
export const HOME_PAGE = '/'
export const CART_PAGE = 'cart'

export const CHECKOUT_STEPS_NAMES = [
  USER_LOGIN_TITLE,
  SHIPPING_ADDRESS_TITLE,
  PAYMENT_METHOD_TITLE,
  PLACE_ORDER_TITLE
]

export const CHECKOUT_STEPS = [
  SHIPPING_ADDRESS_PAGE,
  PAYMENT_METHOD_PAGE,
  PLACE_ORDER_PAGE
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
