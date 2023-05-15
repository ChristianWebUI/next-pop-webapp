import Image from 'next/image'

export default function ImageCarouselItem({
  smallImage,
  handleClick,
  imgIndex
}) {
  return (
    <div
      className="basis-[24%] min-w-[24%] cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={smallImage}
        alt={`small-img-${imgIndex}`}
        width={200}
        height={200}
        priority
        quality={100}
        sizes="100vh"
        className="w-full"
      />
    </div>
  )
}
