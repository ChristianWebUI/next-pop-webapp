'use client'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import classnames from 'classnames'
import { useState } from 'react'

export default function StarRating({
  classNames,
  isDisabled = false,
  currentRating = 0
}) {
  const [rating, setRating] = useState(currentRating)
  const [hover, setHover] = useState(currentRating)
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            type="button"
            key={index}
            className={classnames('w-3.5 h-3.5 cursor-pointer', {
              [classNames]: classNames,
              'cursor-default': isDisabled
            })}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setHover(0)
              setRating(0)
            }}
            disabled={isDisabled}
          >
            {index <= ((rating && hover) || hover) ? (
              <StarIcon className="w-full text-yellow-star-color" />
            ) : (
              <StarIconOutline className="w-full text-yellow-star-color" />
            )}
          </button>
        )
      })}
    </div>
  )
}
