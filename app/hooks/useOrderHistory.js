import { GET_ORDERS_HISTORY } from '@/graphql/queries/getOrdersHistory'
import { formatCurrencyInCop } from '@/utils/price'
import { useQuery } from '@apollo/client'
import { useFormatter } from 'next-intl'

export default function useOrderHistory() {
  const { loading, error, data } = useQuery(GET_ORDERS_HISTORY)
  const format = useFormatter()
  const formatCurrency = (amount) => formatCurrencyInCop(format, amount)
  return { loading, error, orders: data?.getOrdersHistory, formatCurrency }
}
