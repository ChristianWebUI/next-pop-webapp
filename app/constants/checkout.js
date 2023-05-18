import {
  calculateDeclaredValue,
  calculateHeight,
  calculateLength,
  calculateWeight,
  calculateWidth
} from '@/utils/shipping'
import {
  CheckCircleIcon,
  CreditCardIcon,
  ShoppingCartIcon,
  TruckIcon
} from '@heroicons/react/24/solid'
import classnames from 'classnames'

export const USER_LOGIN_TITLE = 'User Login'
export const SHIPPING_ADDRESS_TITLE = 'Shipping Address'
export const PAYMENT_METHOD_TITLE = 'Payment Method'
export const CHOOSE_PAYMENT_METHOD_TITLE = 'Choose Payment Method'
export const PLACE_ORDER_TITLE = 'Place Order'
export const ORDER_ITEMS_TITLE = 'Order Items'
export const ORDER_SUMMARY_TITLE = 'Order Summary'
export const ITEMS_TITLE = 'Items'
export const TAX_TITLE = 'Tax'
export const SHIPPING_TITLE = 'Shipping'
export const TOTAL_TITLE = 'Total'
export const BACK_BUTTON_TITLE = 'Back'
export const NEXT_BUTTON_TITLE = 'Next'
export const SHIPPING_ADDRESS_PAGE = 'shipping'
export const PAYMENT_METHOD_PAGE = 'payment'
export const PLACE_ORDER_PAGE = 'placeorder'
export const HOME_PAGE = '/'
export const CART_PAGE = 'cart'

export const CHECKOUT_STEPS_NAMES = [
  {
    stepName: USER_LOGIN_TITLE,
    icon: (classes = '') => (
      <ShoppingCartIcon
        className={classnames('w-5 h-5', { [classes]: classes })}
      />
    )
  },
  {
    stepName: SHIPPING_ADDRESS_TITLE,
    icon: (classes = '') => (
      <TruckIcon className={classnames('w-5 h-5', { [classes]: classes })} />
    )
  },
  {
    stepName: PAYMENT_METHOD_TITLE,
    icon: (classes = '') => (
      <CreditCardIcon
        className={classnames('w-5 h-5', { [classes]: classes })}
      />
    )
  },
  {
    stepName: PLACE_ORDER_TITLE,
    icon: (classes = '') => (
      <CheckCircleIcon
        className={classnames('w-5 h-5', { [classes]: classes })}
      />
    )
  }
]

export const CHECKOUT_STEPS = [
  SHIPPING_ADDRESS_PAGE,
  PAYMENT_METHOD_PAGE,
  PLACE_ORDER_PAGE
]

export const FULLNAME_LABEL = 'Full Name'
export const PHONE_NUMBER_LABEL = 'Phone Number'
export const ADDRESS_LABEL = 'Address'
export const DEPARTMENT_LABEL = 'Department'
export const CITY_LABEL = 'City'
export const COUNTRY_LABEL = 'Country'
export const NIT_LABEL = 'ID Number'
export const NIT_TYPE_LABEL = 'Type of your ID'
export const CASH_ON_DELIVERY_LABEL = 'Are you going to pay on delivery?'
export const QUOTE_SHIPPING_LABEL = 'Quote shipping'
export const CASH_ON_DELIVERY_TEXT = 'You are going to pay on delivery'

const MEDELLIN_LOCATION_CODE = '05001000'

export const QUOTE_SHIPPING_VARIABLES = {
  originLocationCode: MEDELLIN_LOCATION_CODE,
  height: calculateHeight,
  width: calculateWidth,
  length: calculateLength,
  weight: calculateWeight,
  declaredValue: calculateDeclaredValue
}

export const COUNTRIES = [
  { name: 'Argentina', code: '032', prefix: '+54', flag: '🇦🇷' },
  { name: 'Bolivia', code: '068', prefix: '+591', flag: '🇧🇴' },
  { name: 'Brazil', code: '076', prefix: '+55', flag: '🇧🇷' },
  { name: 'Chile', code: '152', prefix: '+56', flag: '🇨🇱' },
  { name: 'Colombia', code: '170', prefix: '+57', flag: '🇨🇴' },
  { name: 'Costa Rica', code: '188', prefix: '+506', flag: '🇨🇷' },
  { name: 'Cuba', code: '192', prefix: '+53', flag: '🇨🇺' },
  { name: 'Dominican Republic', code: '214', prefix: '+1', flag: '🇩🇴' },
  { name: 'Ecuador', code: '218', prefix: '+593', flag: '🇪🇨' },
  { name: 'El Salvador', code: '222', prefix: '+503', flag: '🇸🇻' },
  { name: 'Guatemala', code: '320', prefix: '+502', flag: '🇬🇹' },
  { name: 'Haiti', code: '332', prefix: '+509', flag: '🇭🇹' },
  { name: 'Honduras', code: '340', prefix: '+504', flag: '🇭🇳' },
  { name: 'Jamaica', code: '388', prefix: '+1', flag: '🇯🇲' },
  { name: 'Mexico', code: '484', prefix: '+52', flag: '🇲🇽' },
  { name: 'Nicaragua', code: '558', prefix: '+505', flag: '🇳🇮' },
  { name: 'Panama', code: '591', prefix: '+507', flag: '🇵🇦' },
  { name: 'Paraguay', code: '600', prefix: '+595', flag: '🇵🇾' },
  { name: 'Peru', code: '604', prefix: '+51', flag: '🇵🇪' },
  { name: 'Puerto Rico', code: '630', prefix: '+1', flag: '🇵🇷' },
  { name: 'Trinidad and Tobago', code: '780', prefix: '+1', flag: '🇹🇹' },
  { name: 'Uruguay', code: '858', prefix: '+598', flag: '🇺🇾' },
  { name: 'Venezuela', code: '862', prefix: '+58', flag: '🇻🇪' }
]
