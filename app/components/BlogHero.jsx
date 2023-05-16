import { BLOG_HERO_PARAGRAPH, BLOG_HERO_TITLE } from '@/constants/blog'

export default function BlogHero() {
  return (
    <section
      id="blog-hero"
      className="w-full bg-[url('/blog/blog-hero-pdp.jpeg')] bg-cover h-[40vh] flex justify-center text-center flex-col p-3.5"
    >
      <h2 className="text-white">{BLOG_HERO_TITLE}</h2>
      <p className="text-white">{BLOG_HERO_PARAGRAPH}</p>
    </section>
  )
}
