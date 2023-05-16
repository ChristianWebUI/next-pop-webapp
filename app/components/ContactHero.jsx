import { CONTACT_HERO_PARAGRAPH, CONTACT_HERO_TITLE } from '@/constants/contact'

export default function ContactHero() {
  return (
    <section
      id="contact-hero"
      className="w-full bg-[url('/contact/contact-banner-pdp.png')] bg-cover h-[40vh] flex justify-center text-center flex-col p-3.5"
    >
      <h2 className="text-white">{CONTACT_HERO_TITLE}</h2>
      <p className="text-white">{CONTACT_HERO_PARAGRAPH}</p>
    </section>
  )
}
