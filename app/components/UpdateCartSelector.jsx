'use client'
import { useStoreContext } from '@/context/StoreContext'
import { GET_PRODUCT_STOCK_COUNT } from '@/graphql/queries/getProductStockCount'
import { useQuery } from '@apollo/client'

function useProductStockById(id) {
  const { data } = useQuery(GET_PRODUCT_STOCK_COUNT, {
    variables: { id }
  })

  return {
    data
  }
}

export default function QuantitySelector({ quantity, itemsInStock, product }) {
  const { data } = useProductStockById(product._id)
  const { dispatch } = useStoreContext()

  const updateCartHandler = (item, selectedNumber) => {
    const quantity = Number(selectedNumber)
    if (data?.getProductStockCount < quantity) {
      alert('Sorry. Product is out of stock') // TODO: Handle notifications with proper toast message or library
      return
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
    // TODO: update notification
  }

  return (
    <select
      className="w-[35%] text-center text-sm font-semibold"
      value={quantity}
      onChange={(e) => updateCartHandler(product, e.target.value)}
    >
      {[...Array(itemsInStock).keys()].map((number) => (
        <option key={number + 1} value={number + 1}>
          {number + 1}
        </option>
      ))}
    </select>
  )
}
