import {
  ABOUT_HEAD_ABBR_TEXT,
  ABOUT_HEAD_MARQUEE_TEXT,
  ABOUT_HEAD_PARAGRAPH,
  ABOUT_HEAD_TITLE
} from '@/constants/about'
import Image from 'next/image'

export default function AboutHead() {
  return (
    <section
      id="about-head"
      className="section-p1 flex flex-col md:flex-row items-center md:gap-10 gap-0"
    >
      <Image
        src="/about/about-head-pdp.jpeg"
        alt="about-head-image"
        height={1200}
        width={1600}
        quality={100}
        className="w-full md:w-6/12 md:mb-0 h-auto mb-5"
      />
      <div>
        <h2>{ABOUT_HEAD_TITLE}</h2>
        <p>{ABOUT_HEAD_PARAGRAPH}</p>
        <abbr title="about-abbr">{ABOUT_HEAD_ABBR_TEXT}</abbr>
        <br />
        <br />
        <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
          {ABOUT_HEAD_MARQUEE_TEXT}
        </marquee>
      </div>
    </section>
  )
}
