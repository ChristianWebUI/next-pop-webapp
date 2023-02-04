import { XCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

export default function CartItemsList({ cartItems, onClickHanlder }) {
  const numberOfItemsToCheckout = () =>
    cartItems.reduce((numOfItems, item) => numOfItems + item.quantity, 0)

  const calculateSubTotal = () =>
    cartItems.reduce(
      (valueOfItems, item) => valueOfItems + item.quantity * item.price,
      0
    )
  return (
    <div className="grid md:grid-cols-4 md:gap-5">
      <div className="overflow-x-auto md:col-span-3">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="px-5 text-left">Item</th>
              <th className="p-5 text-right">Quantity</th>
              <th className="p-5 text-right">Price</th>
              <th className="p-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.slug} className="border-b">
                <td>
                  <Link
                    href={`/product/${item.slug}`}
                    className="flex items-center"
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
                <td className="p-5 text-right">{item.quantity}</td>
                <td className="p-5 text-right">${item.price}</td>
                <td className="p-5 text-center">
                  <button onClick={() => onClickHanlder(item)}>
                    <XCircleIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card p-5 h-fit">
        <ul>
          <li>
            <div className="pb-3 text-xl">{`Subtotal (${numberOfItemsToCheckout()}) : $${calculateSubTotal()}`}</div>
          </li>
          <li>
            <Link href="/shipping">
              <button className="primary-button w-full">Check Out</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
