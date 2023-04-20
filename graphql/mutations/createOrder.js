import { gql } from '@apollo/client'

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrder(
    $orderItems: [OrderItemInput!]!
    $shippingInfo: ShippingInfoInput!
    $paymentMethod: String!
    $itemsPrice: Float!
    $shippingPrice: Float!
    $taxPrice: Float!
    $totalPrice: Float!
  ) {
    createOrder(
      orderItems: $orderItems
      shippingInfo: $shippingInfo
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
