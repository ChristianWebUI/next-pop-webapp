import { gql } from '@apollo/client'

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(email: $email) {
      id
      name
      password
      email
      profilePicture
      isAdmin
    }
  }
`

export default function getUserByEmailQuery(email) {
  return {
    query: GET_USER_BY_EMAIL,
    variables: { email }
  }
}
