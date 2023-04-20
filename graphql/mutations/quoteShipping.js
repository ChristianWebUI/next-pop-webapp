const { gql } = require('@apollo/client')

export const QUOTE_SHIPPING = gql`
  mutation QuoteShipping($input: QuoteShippingInput!) {
    quoteShipping(input: $input) {
      deliveryCompanyId
      deliveryCompanyName
      deliveryCompanyImgUrl
      shippingCost
      shippingTime
      singleOfficeDelivery
      pickupService
      pickupTime
      score
    }
  }
`
