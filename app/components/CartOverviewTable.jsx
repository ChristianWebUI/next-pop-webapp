import UpdateCartSelector from '@/components/UpdateCartSelector'
import { CART, CART_KEYS, ORDER, ORDER_KEYS } from '@/constants/order'
import { XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function CartOverviewTable({
  cartItems,
  onClickHandler = () => {},
  context = CART
}) {
  const tableKeys = {
    [CART]: CART_KEYS,
    [ORDER]: ORDER_KEYS
  }[context]

  const quantityContent = {
    [CART]: (item) => (
      <UpdateCartSelector
        product={item}
        quantity={item.quantity}
        itemsInStock={item.countInStock}
      />
    ),
    [ORDER]: (item) => item.quantity
  }[context]

  const lastContent = {
    [CART]: (item) => (
      <button onClick={() => onClickHandler(item)}>
        <XCircleIcon className="h-5 w-5" />
      </button>
    ),
    [ORDER]: (item) => `$${item.quantity * item.price}`
  }[context]

  return (
    <table className="min-w-full">
      <thead className="border-b">
        <tr>
          <th className="px-5 text-left">{tableKeys.item}</th>
          <th className="p-5 text-right">{tableKeys.quantity}</th>
          <th className="p-5 text-right">{tableKeys.price}</th>
          <th className="p-5">{tableKeys.last}</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.slug} className="border-b">
            <td>
              <Link
                href={`/product/${item.slug}`}
                className="flex items-center text-blue-700"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  quality={100}
                  priority
                />
                &nbsp;
                {item.name}
              </Link>
            </td>
            <td className="p-5 text-right">{quantityContent(item)}</td>
            <td className="p-5 text-right">${item.price}</td>
            <td className="p-5 text-center">{lastContent(item)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
