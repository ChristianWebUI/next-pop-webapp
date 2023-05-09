import { gql } from '@apollo/client'

export const CREATE_BANCOLOMBIA_TRANSFER = gql`
  mutation CreateBancolombiaTransfer($orderData: TransferRegistryInput!) {
    createBancolombiaTransfer(orderData: $orderData) {
      data {
        header {
          type
        }
        redirectURL
        transferCode
      }
    }
  }
`
