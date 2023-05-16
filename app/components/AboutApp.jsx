import { ABOUT_APP_TITLE, ABOUT_APP_TITLE_LINK } from '@/constants/about'
import Link from 'next/link'

export default function AboutApp() {
  return (
    <section id="about-app" className="section-p1 text-center">
      <h1>
        {ABOUT_APP_TITLE}
        <Link href="#" className="underline">
          {ABOUT_APP_TITLE_LINK}
        </Link>
      </h1>
      <div className="w-full md:w-[70%] h-full mt-8 mb-0 mx-auto">
        <video
          className="w-full h-full rounded-[20px]"
          autoPlay
          muted
          loop
          src="/about/about-video-pdp.mp4"
        ></video>
      </div>
    </section>
  )
}
