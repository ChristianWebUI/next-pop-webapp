'use client'
import ImageCarouselItem from '@/components/ImageCarouselItem'
import Image from 'next/image'
import { useState } from 'react'

export default function ImagesCarousel({ images = [] }) {
  const [selectedImage, setNewImage] = useState(images[0])
  const handleSelectNewImage = (newImg) => setNewImage(newImg)
  const smallGroupImages = images.filter((image) => image !== selectedImage)
  return (
    <div id="image-carousel" className="w-[40%] mr-[50px]">
      <Image
        src={selectedImage}
        alt="selected-image-carousel"
        width={200}
        height={200}
        sizes="100vh"
        priority
        quality={100}
        className="w-full"
      />
      <div className="w-full overflow-x-auto mt-1">
        <div className="flex justify-between gap-1 w-full">
          {smallGroupImages?.map((smallImage, index) => (
            <ImageCarouselItem
              key={`small-i-${index + 1}`}
              smallImage={smallImage}
              imgIndex={index}
              handleClick={() => handleSelectNewImage(smallImage)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
