import { FEATURES } from '@/constants/home'
import Image from 'next/image'

export default function Feature() {
  return (
    <section
      id="feature"
      className="section-p1 flex items-center justify-between flex-wrap"
    >
      {FEATURES.map(({ id, img, altImgText, label, bgColor }) => (
        <div
          key={id}
          className="w-45 text-center py-[25px] px-[15px] shadow-fe-box border border-solid border-primary-border-color rounded mx-[15px] hover:shadow-fe-box-hover"
        >
          <Image
            src={img}
            alt={altImgText}
            width={105}
            height={152}
            quality={100}
            className="w-full mb-[10px]"
          />
          <h6
            className={`inline-block pt-[9px] pb-1.5 px-2 leading-none rounded text-primary-accent-color ${bgColor}`}
          >
            {label}
          </h6>
        </div>
      ))}
    </section>
  )
}
