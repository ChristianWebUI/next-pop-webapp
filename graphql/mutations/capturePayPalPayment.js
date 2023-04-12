import { gql } from '@apollo/client'

export const CAPTURE_PAYPAL_PAYMENT = gql`
  mutation CapturePaypalPayment($paymentData: capturePaymentInput!) {
    capturePayPalPayment(paymentData: $paymentData) {
      _id
    }
  }
`
