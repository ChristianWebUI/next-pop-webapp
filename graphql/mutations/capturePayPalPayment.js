import { gql } from '@apollo/client'

export const CAPTURE_PAYPAL_PAYMENT = gql`
  mutation CapturePaypalPayment($paymentData: CapturePaymentInput!) {
    capturePayPalPayment(paymentData: $paymentData) {
      _id
    }
  }
`
