import {
  BLOG1_PARAGRAPH,
  BLOG1_TITLE,
  BLOG_BUTTON_TEXT
} from '@/constants/blog'
import Image from 'next/image'
import Link from 'next/link'

export default function Blogs() {
  return (
    <section
      id="blog-section"
      className="pt-[100px] md:pt-[150px] pb-0 md:px-[150px] px-5"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center w-full relative pb-24">
        <div className="md:w-6/12 md:mr-10 md:mb-0 w-full mr-0 mb-8">
          <Image
            src="/blog/blog-1.jpeg"
            alt="blog-img-1"
            width={1126}
            height={920}
            quality={100}
            sizes="100vh"
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="md:w-6/12 w-full">
          <h4>{BLOG1_TITLE}</h4>
          <p>{BLOG1_PARAGRAPH}</p>
          <Link
            href="#"
            className="relative uppercase text-xs text-black font-bold after:content-[''] after:w-[50px] after:h-[1px] after:bg-black after:absolute after:top-[50%] after:right-[-60px] hover:text-primary-accent-color transition-[0.3s] hover:after:bg-primary-accent-color"
          >
            {BLOG_BUTTON_TEXT}
          </Link>
        </div>
        <h1 className="absolute -top-12 left-0 text-7xl font-bold text-blog-date-color -z-[9]">
          13/01
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center w-full relative pb-24">
        <div className="md:w-6/12 md:mr-10 md:mb-0 w-full mr-0 mb-8">
          <Image
            src="/blog/blog-2.jpg"
            alt="blog-img-2"
            width={1126}
            height={920}
            quality={100}
            sizes="100vh"
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="md:w-6/12 w-full">
          <h4>{BLOG1_TITLE}</h4>
          <p>{BLOG1_PARAGRAPH}</p>
          <Link
            href="#"
            className="relative uppercase text-xs text-black font-bold after:content-[''] after:w-[50px] after:h-[1px] after:bg-black after:absolute after:top-[50%] after:right-[-60px] hover:text-primary-accent-color transition-[0.3s] hover:after:bg-primary-accent-color"
          >
            {BLOG_BUTTON_TEXT}
          </Link>
        </div>
        <h1 className="absolute -top-12 left-0 text-7xl font-bold text-blog-date-color -z-[9]">
          16/12
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center w-full relative pb-24">
        <div className="md:w-6/12 md:mr-10 md:mb-0 w-full mr-0 mb-8">
          <Image
            src="/blog/blog-3.jpg"
            alt="blog-img-3"
            width={1126}
            height={920}
            quality={100}
            sizes="100vh"
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="md:w-6/12 w-full">
          <h4>{BLOG1_TITLE}</h4>
          <p>{BLOG1_PARAGRAPH}</p>
          <Link
            href="#"
            className="relative uppercase text-xs text-black font-bold after:content-[''] after:w-[50px] after:h-[1px] after:bg-black after:absolute after:top-[50%] after:right-[-60px] hover:text-primary-accent-color transition-[0.3s] hover:after:bg-primary-accent-color"
          >
            {BLOG_BUTTON_TEXT}
          </Link>
        </div>
        <h1 className="absolute -top-12 left-0 text-7xl font-bold text-blog-date-color -z-[9]">
          28/01
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center w-full relative pb-24">
        <div className="md:w-6/12 md:mr-10 md:mb-0 w-full mr-0 mb-8">
          <Image
            src="/blog/blog-4.jpg"
            alt="blog-img-4"
            width={1126}
            height={920}
            quality={100}
            sizes="100vh"
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="md:w-6/12 w-full">
          <h4>{BLOG1_TITLE}</h4>
          <p>{BLOG1_PARAGRAPH}</p>
          <Link
            href="#"
            className="relative uppercase text-xs text-black font-bold after:content-[''] after:w-[50px] after:h-[1px] after:bg-black after:absolute after:top-[50%] after:right-[-60px] hover:text-primary-accent-color transition-[0.3s] hover:after:bg-primary-accent-color"
          >
            {BLOG_BUTTON_TEXT}
          </Link>
        </div>
        <h1 className="absolute -top-12 left-0 text-7xl font-bold text-blog-date-color -z-[9]">
          13/04
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center w-full relative pb-24">
        <div className="md:w-6/12 md:mr-10 md:mb-0 w-full mr-0 mb-8">
          <Image
            src="/blog/blog-5.jpg"
            alt="blog-img-5"
            width={1126}
            height={920}
            quality={100}
            sizes="100vh"
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="md:w-6/12 w-full">
          <h4>{BLOG1_TITLE}</h4>
          <p>{BLOG1_PARAGRAPH}</p>
          <Link
            href="#"
            className="relative uppercase text-xs text-black font-bold after:content-[''] after:w-[50px] after:h-[1px] after:bg-black after:absolute after:top-[50%] after:right-[-60px] hover:text-primary-accent-color transition-[0.3s] hover:after:bg-primary-accent-color"
          >
            {BLOG_BUTTON_TEXT}
          </Link>
        </div>
        <h1 className="absolute -top-12 left-0 text-7xl font-bold text-blog-date-color -z-[9]">
          18/06
        </h1>
      </div>
    </section>
  )
}
