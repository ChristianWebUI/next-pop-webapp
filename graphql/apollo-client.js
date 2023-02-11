import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.APOLLO_CLIENT_URI,
    credentials: 'include'
  })
})

export default client
