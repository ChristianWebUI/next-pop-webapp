export const PAYPAL = 'Paypal'
export const MERCADOPAGO = 'MercadoPago'
export const BANK_TRANSFER = 'Bank Transfer'
export const EFECTY = 'Efecty'
export const BOTON_BANCOLOMBIA = 'Botón Bancolombia'
export const INCOMING_MESSAGE = 'Coming Soon!'

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
    icon: '/images/paypal.svg',
    value: PAYPAL,
    disabled: false
  },
  {
    id: 'mercadopago',
    icon: '/images/mercado-pago.svg',
    value: MERCADOPAGO,
    disabled: false
  },
  {
    id: 'bank-transfer',
    icon: '/images/bancolombia-transfer.png',
    value: BANK_TRANSFER,
    disabled: false
  },
  {
    id: 'efecty',
    icon: '/images/efecty.svg',
    value: EFECTY,
    disabled: true
  },
  {
    id: 'boton-bancolombia',
    icon: '/images/boton-bancolombia.png',
    value: BOTON_BANCOLOMBIA,
    disabled: true
  }
]

export const getPaymentIcon = (value) =>
  PAYMENT_METHODS.find((method) => method.value === value).icon
