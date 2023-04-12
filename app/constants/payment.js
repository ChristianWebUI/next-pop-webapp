export const PAYPAL = 'Paypal'
export const MERCADOPAGO = 'MercadoPago'
export const CREDIT_CARD = 'Credit Card'

export const MERCADOPAGO_PUBLIC_KEY = process.env.MERCADOPAGO_PUBLIC_KEY

export const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID

export const USD_CURRENCY_CODE = 'USD'
export const COP_CURRENCY_CODE = 'COP'

export const mercadoPagoCustomization = {
  texts: {
    action: 'pay',
    valueProp: 'security_details'
  }
}

export const PAYMENT_METHODS = [
  {
    id: 'paypal',
    icon: '',
    value: PAYPAL
  },
  {
    id: 'mercadopago',
    icon: '',
    value: MERCADOPAGO
  },
  {
    id: 'creditcard',
    icon: '',
    value: CREDIT_CARD
  }
]
