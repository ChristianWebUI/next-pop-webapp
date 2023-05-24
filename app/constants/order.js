export const CART = 'Cart'
export const ORDER = 'Order'
export const DELIVERED_AT = 'Delivered at'
export const NOT_DELIVERED = 'Not delivered'
export const PAID_AT = 'Paid at'
export const NOT_PAID = 'Not Paid'

// Constants for text
const item = 'Item'
const quantity = 'Quantity'
const price = 'Price'
const action = 'Action'
const subTotal = 'Subtotal'

// Values for shipping and taxes
export const FREE_SHIPPING_THRESHOLD = 200
export const SHIPPING_PRICE = 0
export const TAX_VALUE = 0

// Constants for Order History
export const ORDER_HISTORY_TITLE = 'Order History'
export const ORDER_HISTORY_TABLE_HEADERS = {
  ID: 'ID',
  DATE: 'DATE',
  TOTAL: 'TOTAL',
  PAID: 'PAID',
  DELIVERED: 'DELIVERED',
  ACTION: 'ACTION'
}

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

export const PAYMENT_STATUS = {
  PAID: 'PAID',
  NOT_PAID: 'NOT_PAID',
  INFO: 'INFO',
  WARNING: 'WARNING'
}

// ******************* Order History **********************

export const ORDER_HISTORY_HERO_TITLE = '#order_history'
export const ORDER_HISTORY_PARAGRAPH = 'Lorem ipsum dolor sit amet, consectetur'

// Order History Table

// CART TABLE
const ID_HEADER = 'Id'
const DATE_CREATED_HEADER = 'Date Created'
const TOTAL_HEADER = 'Total'
const STATUS_HEADER = 'Status'
const PAYMENT_STATUS_HEADER = 'Paid'
const DELIVERY_STATUS_HEADER = 'Delivered'
const VIEW_DETAILS_HEADER = 'View Details'
export const ORDER_HISTORY_TABLE_PAGESIZE = 10
export const ORDER_HISTORY_TABLE_HEADINGS = [
  ID_HEADER,
  DATE_CREATED_HEADER,
  TOTAL_HEADER,
  STATUS_HEADER,
  PAYMENT_STATUS_HEADER,
  DELIVERY_STATUS_HEADER,
  VIEW_DETAILS_HEADER
]
