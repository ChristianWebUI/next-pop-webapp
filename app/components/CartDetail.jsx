import NumberInput from '@/components/NumberInput'
import Price from '@/components/Price'
import { CART_TABLE_HEADINGS } from '@/constants/cart'
import data from '@/utils/data'
import { TrashIcon } from '@heroicons/react/24/outline'
import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

const dummyCartItems = data.products.slice(0, 3)

export default function CartDetail({ hasSectionP1 = true, otherClasses }) {
  return (
    <section
      id="cart"
      className={classnames('overflow-x-auto lg:overflow-visible', {
        'section-p1': hasSectionP1,
        [otherClasses]: otherClasses
      })}
    >
      <table className="w-full border-collapse table-fixed whitespace-nowrap">
        <thead className="border border-solid border-table-header-color border-x-0">
          <tr>
            {CART_TABLE_HEADINGS.map((header, index) => (
              <th
                className={classnames(
                  'text-center font-bold uppercase text-sm px-0 py-[18px]',
                  {
                    'w-[100px]': index + 1 === 1,
                    'w-[150px]': [2, 4, 5, 6].includes(index + 1),
                    'w-[250px]': index + 1 === 3
                  }
                )}
                key={`${header}-${index}`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dummyCartItems.map(
            ({ slug, image, name, price, quantity }, index) => (
              <tr key={slug}>
                <td
                  className={classnames(
                    'text-center w-[100px] pt-[15px] text-sm'
                  )}
                >
                  <button type="button">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </td>
                <td
                  className={classnames(
                    'text-center w-[150px] pt-[15px] text-sm'
                  )}
                >
                  <Link href={`/product/${slug}`}>
                    <Image
                      src={image}
                      alt={name}
                      width={300}
                      height={300}
                      quality={100}
                      priority
                      className="w-[70px] mx-auto rounded"
                    />
                  </Link>
                </td>
                <td
                  className={classnames(
                    'text-center w-[250px] pt-[15px] text-sm'
                  )}
                >
                  {name}
                </td>
                <td
                  className={classnames(
                    'text-center w-[150px] pt-[15px] text-sm'
                  )}
                >
                  <Price price={price} />
                </td>
                <td
                  className={classnames(
                    'text-center w-[150px] pt-[15px] text-sm'
                  )}
                >
                  <NumberInput />
                </td>
                <td
                  className={classnames(
                    'text-center w-[150px] pt-[15px] text-sm'
                  )}
                >
                  <Price price={price} />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  )
}
