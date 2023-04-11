import { gql } from '@apollo/client'

export const NEW_PREFERENCE = gql`
  mutation NewPreference($storeOrderId: ID!) {
    newPreference(storeOrderId: $storeOrderId) {
      preferenceId
    }
  }
`
