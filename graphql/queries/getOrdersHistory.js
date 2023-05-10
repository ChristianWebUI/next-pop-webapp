const { gql } = require('@apollo/client')

export const GET_ORDERS_HISTORY = gql`
  query GetOrdersHistory {
    getOrdersHistory {
      _id
      createdAt
      totalPrice
      isPaid
      isDelivered
      paidAt
      deliveredAt
    }
  }
`
