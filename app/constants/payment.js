export const PAYPAL = 'Paypal'
export const MERCADOPAGO = 'MercadoPago'
export const CREDIT_CARD = 'Credit Card'

export const MERCADOPAGO_PUBLIC_KEY = process.env.MERCADOPAGO_PUBLIC_KEY

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
