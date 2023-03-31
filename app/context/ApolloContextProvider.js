'use client'
import getClient from '@/graphql/apollo-client'
import { ApolloProvider as ApolloContextProvider } from '@apollo/client'

export default function ApolloProvider({ children }) {
  const client = getClient()
  return (
    <ApolloContextProvider client={client}>{children}</ApolloContextProvider>
  )
}
