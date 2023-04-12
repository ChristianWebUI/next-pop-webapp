import { gql } from '@apollo/client'

export const CREATE_PAYPAL_ORDER = gql`
  mutation CreatePayPalOrder($orderData: PayPalOrderInput!) {
    createPayPalOrder(orderData: $orderData) {
      id
    }
  }
`
