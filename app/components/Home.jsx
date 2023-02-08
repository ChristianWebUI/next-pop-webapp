'use client'
import Products from '@/components/Products'
import { gql, useQuery } from '@apollo/client'

const GET_MESSAGE = gql`
  query countAllUsers {
    countUsers
  }
`

export default function Home() {
  const { data, loading, error } = useQuery(GET_MESSAGE)
  if (loading) return <>Loading...</>
  if (error) {
    return <>Error: {error.message} ⚔️</>
  }
  return (
    <>
      {`Total number of users are: ${data.countUsers}`}
      <Products />
    </>
  )
}
