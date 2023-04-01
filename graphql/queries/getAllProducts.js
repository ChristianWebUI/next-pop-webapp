import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      _id
      brand
      image
      imageOnHover
      name
      price
      slug
      countInStock
    }
  }
`
