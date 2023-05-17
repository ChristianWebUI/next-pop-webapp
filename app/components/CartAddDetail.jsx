import Price from '@/components/Price'
import {
  CART_ADD_COUPON_BUTTON,
  CART_ADD_COUPON_TITLE,
  CART_ADD_SUBTOTAL_CHECKOUT,
  CART_ADD_SUBTOTAL_SHIPPING,
  CART_ADD_SUBTOTAL_SUBTOTAL,
  CART_ADD_SUBTOTAL_TITLE,
  CART_ADD_SUBTOTAL_TOTAL
} from '@/constants/cart'

export const SubtotalTable = () => (
  <table className="border-collapse w-full mb-5">
    <tbody>
      <tr>
        <td className=" w-6/12 border border-solid border-table-header-color p-2.5 text-sm">
          {CART_ADD_SUBTOTAL_SUBTOTAL}
        </td>
        <td className=" w-6/12 border border-solid border-table-header-color p-2.5 text-sm">
          <Price price={70 + 200 + 10} />
        </td>
      </tr>
      <tr>
        <td className=" w-6/12 border border-solid border-table-header-color p-2.5 text-sm">
          {CART_ADD_SUBTOTAL_SHIPPING}
        </td>
        <td className=" w-6/12 border border-solid border-table-header-color p-2.5 text-sm">
          Free
        </td>
      </tr>
      <tr>
        <td className=" w-6/12 border border-solid border-table-header-color p-2.5 text-sm">
          <strong>{CART_ADD_SUBTOTAL_TOTAL}</strong>
        </td>
        <td className=" w-6/12 border border-solid border-table-header-color p-2.5 text-sm">
          <strong>
            <Price price={70 + 200 + 10} />
          </strong>
        </td>
      </tr>
    </tbody>
  </table>
)

export default function CartAddDetail() {
  return (
    <section
      id="cart-add"
      className="section-p1 flex flex-col md:flex-row flex-wrap justify-between"
    >
      <div id="coupon" className="md:w-6/12 w-full mb-8">
        <h3 className="pb-4">{CART_ADD_COUPON_TITLE}</h3>
        <div>
          <input
            type="text"
            placeholder="Enter Your Coupon"
            className="py-2.5 px-5 outline-none w-[60%] mr-2.5 border border-solid border-table-header-color"
          />
          <button
            type="button"
            className="text-sm font-semibold px-[20px] py-[12px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s]"
          >
            {CART_ADD_COUPON_BUTTON}
          </button>
        </div>
      </div>
      <div
        id="subtotal"
        className="md:w-6/12 w-full mb-8 border border-solid border-table-header-color md:p-8 p-4"
      >
        <h3 className="pb-4">{CART_ADD_SUBTOTAL_TITLE}</h3>
        <SubtotalTable />
        <button
          type="button"
          className="text-sm font-semibold px-[20px] py-[12px] text-white bg-primary-accent-color rounded border-none outline-none transition-[0.2s]"
        >
          {CART_ADD_SUBTOTAL_CHECKOUT}
        </button>
      </div>
    </section>
  )
}
