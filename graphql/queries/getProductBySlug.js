import { gql } from '@apollo/client'

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String!) {
    getProductBySlug(slug: $slug) {
      brand
      category
      countInStock
      description
      image
      imageOnHover
      images
      name
      numReviews
      price
      rating
      slug
    }
  }
`
