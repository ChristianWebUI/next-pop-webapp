'use client'
import Card from '@/components/Card'
import { useState } from 'react'

export default function ProductCard({
  name,
  image,
  imageOnHover,
  slug,
  price,
  brand
}) {
  const [currentImage, setCurrentImage] = useState(image)

  const handleHover = () => setCurrentImage(imageOnHover)

  const handleMouseLeave = () => setCurrentImage(image)
  return (
    <Card
      name={name}
      image={currentImage}
      slug={slug}
      price={price}
      brand={brand}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleHover}
    />
  )
}
