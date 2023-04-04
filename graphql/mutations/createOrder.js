import { gql } from '@apollo/client'

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrder(
    $orderItems: [OrderItemInput!]!
    $shippingAddress: ShippingAddressInput!
    $paymentMethod: String!
    $itemsPrice: Float!
    $shippingPrice: Float!
    $taxPrice: Float!
    $totalPrice: Float!
  ) {
    createOrder(
      orderItems: $orderItems
      shippingAddress: $shippingAddress
      paymentMethod: $paymentMethod
      itemsPrice: $itemsPrice
      shippingPrice: $shippingPrice
      taxPrice: $taxPrice
      totalPrice: $totalPrice
    ) {
      _id
    }
  }
`
