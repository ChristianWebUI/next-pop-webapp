'use client'
import client from '@/graphql/apollo-client'
import { ApolloProvider as ApolloContextProvider } from '@apollo/client'

export default function ApolloProvider({ children }) {
  return (
    <ApolloContextProvider client={client}>{children}</ApolloContextProvider>
  )
}
