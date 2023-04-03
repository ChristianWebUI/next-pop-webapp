export const CART = 'Cart'
export const ORDER = 'Order'

// Constants for text
const item = 'Item'
const quantity = 'Quantity'
const price = 'Price'
const action = 'Action'
const subTotal = 'Subtotal'

// Values for shipping and taxes
export const FREE_SHIPPING_THRESHOLD = 200
export const SHIPPING_PRICE = 15
export const TAX_VALUE = 0.15

export const CART_KEYS = {
  item,
  quantity,
  price,
  last: action
}

export const ORDER_KEYS = {
  item,
  quantity,
  price,
  last: subTotal
}
