import CartOverviewTable from '@/components/CartOverviewTable'
import Link from 'next/link'

export default function CartItemsList({
  cartItems,
  onClickHandler = () => {}
}) {
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
        <CartOverviewTable
          cartItems={cartItems}
          onClickHandler={onClickHandler}
        />
      </div>
      <div className="card p-5 h-fit">
        <ul>
          <li>
            <div className="pb-3 text-xl">{`Subtotal (${numberOfItemsToCheckout()}) : $${calculateSubTotal()}`}</div>
          </li>
          <li>
            <Link href="login?callbackUrl=/shipping">
              <button className="primary-button w-full">Check Out</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
