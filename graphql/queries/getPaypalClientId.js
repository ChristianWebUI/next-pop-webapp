import { gql } from '@apollo/client'

export const GET_PAYPAL_CLIENT_ID = gql`
  query GetPaypalClientId {
    paypalClientId
  }
`
