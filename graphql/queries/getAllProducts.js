import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      brand
      image
      imageOnHover
      name
      price
      slug
    }
  }
`
