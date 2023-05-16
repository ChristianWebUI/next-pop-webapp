import { ABOUT_HERO_PARAGRAPH, ABOUT_HERO_TITLE } from '@/constants/about'

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="w-full bg-[url('/about/about-banner-pdp.png')] bg-cover h-[40vh] flex justify-center text-center flex-col p-3.5"
    >
      <h2 className="text-white">{ABOUT_HERO_TITLE}</h2>
      <p className="text-white">{ABOUT_HERO_PARAGRAPH}</p>
    </section>
  )
}
