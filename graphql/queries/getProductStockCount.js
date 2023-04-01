import { gql } from '@apollo/client'

export const GET_PRODUCT_STOCK_COUNT = gql`
  query GetProductStockCount($id: ID!) {
    getProductStockCount(id: $id)
  }
`
