import { GET_ORDER_BY_ID } from '@/graphql-queries/getOrderById'
import { getErrorMessage } from '@/utils/error'
import { useQuery } from '@apollo/client'

export default function useOrderView({ orderId }) {
  const { loading, error, data } = useQuery(GET_ORDER_BY_ID, {
    variables: { id: orderId }
  })
  return {
    loading,
    error: error ? getErrorMessage(error) : null,
    order: data?.getOrderById
  }
}
