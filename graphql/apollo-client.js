import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

let client

export default function getClient() {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: process.env.APOLLO_CLIENT_URI,
        credentials: 'include'
      })
    })
  }

  return client
}
