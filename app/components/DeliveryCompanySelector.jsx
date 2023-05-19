import Price from '@/components/Price'
import { toTitleCase } from '@/utils/text'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function DeliveryCompanySelector({
  deliveryCompanyName,
  deliveryCompanyId,
  deliveryCompanyImgUrl,
  register,
  score,
  shippingCost
}) {
  return (
    <div className="relative lg:w-96 md:flex-none md:basis-[calc(50%_-_0.4rem)] flex-1">
      <input
        type="radio"
        name={deliveryCompanyName}
        id={deliveryCompanyName}
        className="hidden peer"
      />
      <label
        htmlFor={deliveryCompanyName}
        className="flex items-center gap-4 p-4 rounded-xl bg-white bg-opacity-90 backdrop-blur-2xl shadow-md hover:bg-opacity-75 peer-checked:bg-primary-accent-color peer-checked:text-white peer-checked:[&>*:first-child]:grayscale-0 peer-hover:[&>*:first-child]:grayscale-0 cursor-pointer transition"
      >
        <Image
          src={deliveryCompanyImgUrl}
          alt="company image"
          width={50}
          height={50}
          quality={100}
          priority
          className="object-cover rounded-full grayscale"
        />
        <div>
          <h6 className="text-sm">{toTitleCase(deliveryCompanyName)}</h6>
          {score && (
            <span className="flex text-xs opacity-60 gap-1 items-center">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              {score}
            </span>
          )}
        </div>
        <h6 className="ml-auto mr-10">
          <Price price={shippingCost} />
        </h6>
      </label>
      <div className="flex absolute top-0 right-4 bottom-0 w-7 h-7 my-auto rounded-full bg-primary-border-color scale-0 peer-checked:scale-100 transition delay-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-5 text-white my-auto mx-auto"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
      </div>
    </div>
  )
}
