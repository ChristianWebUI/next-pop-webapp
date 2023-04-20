import { gql } from '@apollo/client'

export const GET_ORDER_BY_ID = gql`
  query GetOrderById($id: ID!) {
    getOrderById(id: $id) {
      deliveredAt
      isDelivered
      isPaid
      itemsPrice
      orderItems {
        image
        name
        price
        quantity
        slug
      }
      orderNumber
      paidAt
      paymentMethod
      ShippingInfo {
        fullName
        cellPhone
        address
        city
        department
        country
      }
      shippingPrice
      taxPrice
      totalPrice
    }
  }
`
