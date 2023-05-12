import { StarIcon } from '@heroicons/react/24/solid'

export default function StarRating() {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            type="button"
            key={index}
            className="w-3.5 h-3.5"
            onClick={() => {}}
            disabled
          >
            <StarIcon className="w-full text-yellow-star-color" />
          </button>
        )
      })}
    </div>
  )
}
