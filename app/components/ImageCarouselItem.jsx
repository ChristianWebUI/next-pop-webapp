import Image from 'next/image'

export default function ImageCarouselItem({ src, alt, isActive, onClick }) {
  return (
    <button onClick={onClick} className="relative">
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        quality={100}
        className={`img-carousel rounded-sm cursor-pointer ${
          isActive ? 'opacity-50' : ''
        }`}
      />
    </button>
  )
}
