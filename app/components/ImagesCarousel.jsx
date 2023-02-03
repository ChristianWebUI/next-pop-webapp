'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function ImagesCarousel({ images, name }) {
  const [currentImage, setCurrentImage] = useState(images[0])

  const handleClick = (selectedImage) => setCurrentImage(selectedImage)

  return (
    <div className="md:col-span-2 w-full h-auto">
      <div className="relative w-full h-[80vh] mb-3">
        <Image
          src={currentImage}
          alt={name}
          fill
          quality={100}
          className="rounded-sm cursor-pointer"
        />
      </div>
      <div className="flex w-full h-[15vh] justify-between">
        {images.map((img, index) => (
          <button key={`img-${index}`} onClick={() => handleClick(img)}>
            <Image
              src={img}
              alt={`img-${index}`}
              width={100}
              height={100}
              quality={100}
              className="img-carousel rounded-sm cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
