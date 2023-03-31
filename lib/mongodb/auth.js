import { LOGIN } from '@/graphql-mutations/login'
import getClient from '@/graphql/apollo-client'

export default async function authorizeUser(credentials) {
  try {
    const client = getClient()
    const { data } = await client.mutate({
      mutation: LOGIN,
      variables: { email: credentials.email, password: credentials.password }
    })
    const { user = {}, error = '' } = data?.login
    return {
      user,
      error
    }
  } catch (error) {
    return { error: error.message }
  }
}
