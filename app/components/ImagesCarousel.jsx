'use client'
import ImageCarouselItem from '@/components/ImageCarouselItem'
import Image from 'next/image'
import { useState } from 'react'

export default function ImagesCarousel({ images, name }) {
  const [currentImage, setCurrentImage] = useState(images[0])

  const handleClick = (selectedImage) => {
    if (selectedImage !== currentImage) setCurrentImage(selectedImage)
  }

  return (
    <div className="md:col-span-2 w-full h-auto">
      <div className="relative w-full h-[80vh] mb-3">
        <Image
          src={currentImage}
          alt={name}
          fill
          sizes="100vh"
          priority
          quality={100}
          className="rounded-sm cursor-pointer object-contain md:object-cover"
        />
      </div>
      <div className="flex w-full h-[20vh] justify-between">
        {images.map((img, index) => (
          <ImageCarouselItem
            key={`img-${index}`}
            alt={`img-${index}`}
            src={img}
            isActive={img === currentImage}
            onClick={() => handleClick(img)}
          />
        ))}
      </div>
    </div>
  )
}
